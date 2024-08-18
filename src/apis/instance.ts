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

const fiestaFetch = async (
  url: string,
  method: Method,
  options: RequestInit,
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const finalOptions = {
    method,
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options?.headers,
    },
  };

  try {
    const response = await fetch(baseUrl + url, finalOptions);
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
      // TODO: User Error
      throw error;
    }
    if (error instanceof ReviewError) {
      // TODO: Review Error
      throw error;
    }

    throw error;
  }
};

const instance = {
  get: async <T>(
    url: string,
    options: Omit<RequestInit, "body"> = {},
  ): Promise<FiestaResponse<T>> => fiestaFetch(url, "GET", options),
  post: async <T>(
    url: string,
    body = {},
    options: Omit<RequestInit, "body"> = {},
  ): Promise<FiestaResponse<T>> =>
    fiestaFetch(url, "POST", { body: JSON.stringify(body), ...options }),
  put: async <T>(
    url: string,
    body = {},
    options: Omit<RequestInit, "body"> = {},
  ): Promise<FiestaResponse<T>> =>
    fiestaFetch(url, "PUT", { body: JSON.stringify(body), ...options }),
  delete: async <T>(
    url: string,
    options: Omit<RequestInit, "body"> = {},
  ): Promise<FiestaResponse<T>> => fiestaFetch(url, "DELETE", { ...options }),
};

export default instance;
