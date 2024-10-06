"use client";

import { Session } from "next-auth";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC } from "react";

import useInitializeUserProfile from "@/hooks/session/useInitializeUserProfile";

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

const SessionProvider: FC<Props> = ({ children, session }) => {
  useInitializeUserProfile(session);
  return <AuthProvider session={session}>{children}</AuthProvider>;
};

export default SessionProvider;
