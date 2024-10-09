"use client";

import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC } from "react";

import UserProvider from "./UserProvider";

interface Props {
  children: React.ReactNode;
}

const SessionProvider: FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default SessionProvider;
