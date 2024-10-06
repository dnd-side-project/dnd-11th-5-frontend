"use client";

import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC } from "react";

import useInitializeUserProfile from "@/hooks/session/useInitializeUserProfile";

interface Props {
  children: React.ReactNode;
}

const SessionProvider: FC<Props> = ({ children }) => {
  useInitializeUserProfile();
  return <AuthProvider>{children}</AuthProvider>;
};

export default SessionProvider;
