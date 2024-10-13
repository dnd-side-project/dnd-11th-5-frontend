"use client";

import { useSession } from "next-auth/react";
import React, { FC, ReactNode, useEffect } from "react";

import { useUserStore } from "@/store/user";

interface Props {
  children: ReactNode;
}

const UserProvider: FC<Props> = ({ children }) => {
  const setUser = useUserStore((state) => state.updateUser);
  const { data: session } = useSession();

  useEffect(() => {
    const initializeUserProfile = async () => {
      if (session) {
        const { user } = session;
        return setUser(user);
      }
      setUser(null);
    };

    if (session) {
      initializeUserProfile();
    }
  }, [session, setUser]);
  return <>{children}</>;
};

export default UserProvider;
