import { getSession } from "next-auth/react";

export async function getClientSideSession() {
  const session = await getSession();
  return session;
}
