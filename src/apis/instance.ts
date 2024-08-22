import { Session } from "next-auth";
import { getSession } from "next-auth/react";

import { env } from "../env";
import { getServierSideSession } from "./auth/auth";
import {
  ClientError,
  createFiestaError,
  FestivalError,
  LogsError,
  ReviewError,
  ServerError,
  UserError,
} from "./error";

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface FiestaResponse<T> {
  statusCode: number;
  status: string;
  message: string;
  data: T;
}

export async function getUserClientSession() {
  const session = await getSession();
  return session;
}

type FiestaFetchOptions = Omit<RequestInit, "body">;

export class CreateFiestaFetch {
  private baseUrl: string;
  private authEnabled: boolean;

  constructor(baseUrl: string, authEnabled: boolean = false) {
    this.baseUrl = baseUrl;
    this.authEnabled = authEnabled;
  }

  private async fetch(url: string, method: Method, options: RequestInit) {
    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let userSession: Session | null = null;
    if (this.authEnabled) {
      userSession = await this.getUserSession();
    }

    try {
      const finalOptions = {
        method,
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
      };

      if (!!userSession && !!userSession.accessToken) {
        finalOptions.headers = {
          ...finalOptions.headers,
          Authorization: `Bearer ${userSession.accessToken}`,
        };
      }

      const response = await fetch(this.baseUrl + url, finalOptions);
      if (!response.ok) {
        const errorData = await response.json();
        const fiestaError = createFiestaError(errorData);
        throw fiestaError;
      }
      return await response.json();
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof ServerError) {
        // TODO: Server Error
        throw error;
      }
      if (error instanceof ClientError) {
        // TODO: Client Error
        throw error;
      }
      if (error instanceof FestivalError) {
        // TODO: Festival Error
        throw error;
      }
      if (error instanceof LogsError) {
        // TODO: Logs Error
        throw error;
      }
      if (error instanceof UserError) {
        throw error;
      }
      if (error instanceof ReviewError) {
        // TODO: Review Error
        throw error;
      }

      throw error;
    }
  }

  private async getUserSession() {
    const isServer = typeof window === "undefined";

    const userSession = isServer
      ? await getServierSideSession()
      : await getUserClientSession();

    return userSession;
  }

  public get = async <T>(
    url: string,
    options: FiestaFetchOptions,
  ): Promise<FiestaResponse<T>> => this.fetch(url, "GET", options);

  public post = async <T>(
    url: string,
    body = {},
    options: FiestaFetchOptions = {},
  ): Promise<FiestaResponse<T>> =>
    this.fetch(url, "POST", { body: JSON.stringify(body), ...options });

  public put = async <T>(
    url: string,
    body = {},
    options: FiestaFetchOptions = {},
  ): Promise<FiestaResponse<T>> =>
    this.fetch(url, "PUT", { body: JSON.stringify(body), ...options });

  public delete = async <T>(
    url: string,
    options: FiestaFetchOptions = {},
  ): Promise<FiestaResponse<T>> => this.fetch(url, "DELETE", { ...options });
}

const instance = new CreateFiestaFetch(env.NEXT_PUBLIC_BASE_URL, true);

export default instance;
