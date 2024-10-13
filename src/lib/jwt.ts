import { decodeJwt } from "jose";

export const decodeToken = (token?: string) => {
  if (!token) {
    return null;
  }

  try {
    const decoded = decodeJwt(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode JWT token:", error);
    return null;
  }
};
