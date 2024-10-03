"use client";

import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC, useEffect } from "react";

import { getClientSideSession } from "@/apis/instance";
import { getMe } from "@/apis/user/me/me";
import { useUserStore } from "@/store/user";
import { log } from "@/utils";

interface Props {
  children: React.ReactNode;
}

const SessionProvider: FC<Props> = ({ children }) => {
  const setUser = useUserStore((state) => state.updateUser);

  const initializeUserProfile = async () => {
    try {
      const session = await getClientSideSession();

      if (session) {
        const user = await getMe();
        setUser(user);
      }
    } catch (error) {
      log(error);
    }
  };

  useEffect(() => {
    initializeUserProfile();
  }, []);
  return <AuthProvider>{children}</AuthProvider>;
};

export default SessionProvider;
