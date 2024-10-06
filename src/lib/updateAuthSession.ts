import { Session } from "next-auth";
import { getCsrfToken } from "next-auth/react";

export const updateAuthSession = async (session: Session): Promise<Session> => {
  try {
    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
      throw new Error("Failed to get CSRF token");
    }

    const response = await fetch("/api/auth/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({ session }),
    });

    if (!response.ok) {
      throw new Error("Failed to update session");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating session", error);
    throw error;
  }
};
