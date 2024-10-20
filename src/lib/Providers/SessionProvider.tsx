"use client";

import { Session } from "next-auth";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC } from "react";

import UserProvider from "./UserProvider";

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

const SessionProvider: FC<Props> = ({ children, session }) => {
  return (
    <AuthProvider>
      <UserProvider session={session}>{children}</UserProvider>
    </AuthProvider>
  );
};

export default SessionProvider;
