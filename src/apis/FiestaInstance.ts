import type { KyRequest, NormalizedOptions } from "ky";
import ky, { Options } from "ky";

import { env } from "@/env";
import { getClientSideSession } from "@/lib/session";

import { getServerSideSession } from "./auth/auth";
import { FiestaResponse } from "./instance";

const addAuthTokenToHeader = async (
  _request: KyRequest,
  _options: NormalizedOptions,
) => {
  const isServer = typeof window === "undefined";

  const session = isServer
    ? await getServerSideSession()
    : await getClientSideSession();

  if (session) {
    _request.headers.set("Authorization", `Bearer ${session.accessToken}`);
  }

  return _request;
};

const createKyInstance = () => {
  return ky.create({
    prefixUrl: env.NEXT_PUBLIC_BASE_URL,
    hooks: {
      beforeRequest: [addAuthTokenToHeader],
    },
    retry: {
      limit: 2,
      methods: ["get", "post", "put", "patch", "delete"],
      statusCodes: [408, 413, 429, 500, 502, 503, 504],
    },
    credentials: "include",
  });
};

const Instance = createKyInstance();

const FiestaInstance = {
  get: <T>(url: string, options?: Options) =>
    Instance.get(url, options)
      .json<FiestaResponse<T>>()
      .then((res) => res.data),
  post: <T>(url: string, options?: Options) =>
    Instance.post(url, options)
      .json<FiestaResponse<T>>()
      .then((res) => res.data),
  put: <T>(url: string, options?: Options) =>
    Instance.put(url, options)
      .json<FiestaResponse<T>>()
      .then((res) => res.data),
  patch: <T>(url: string, options?: Options) =>
    Instance.patch(url, options)
      .json<FiestaResponse<T>>()
      .then((res) => res.data),
  delete: <T>(url: string, options?: Options) =>
    Instance.delete(url, options)
      .json<FiestaResponse<T>>()
      .then((res) => res.data),
};

export default FiestaInstance;
