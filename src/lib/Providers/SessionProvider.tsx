"use client";

import { getSession, SessionProvider as AuthProvider } from "next-auth/react";
import { FC, useEffect } from "react";

import { useUserStore } from "@/store/user";

interface Props {
  children: React.ReactNode;
}

const SessionProvider: FC<Props> = ({ children }) => {
  const setUser = useUserStore((state) => state.updateUser);

  const initializeUserProfile = async () => {
    const session = await getSession();
    if (session) {
      const { user } = session;
      return setUser(user);
    }
    setUser(null);
  };

  useEffect(() => {
    initializeUserProfile();
  }, []);
  return <AuthProvider>{children}</AuthProvider>;
};

export default SessionProvider;
