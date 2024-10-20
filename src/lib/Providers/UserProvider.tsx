"use client";

import { Session } from "next-auth";
import React, { FC, ReactNode, useEffect } from "react";

import { useUserStore } from "@/store/user";

interface Props {
  children: ReactNode;
  session: Session | null;
}

const UserProvider: FC<Props> = ({ children, session }) => {
  const setUser = useUserStore((state) => state.updateUser);

  useEffect(() => {
    if (session) {
      const { user } = session;
      return setUser(user);
    }

    setUser(null);
  }, [session, setUser]);
  return <>{children}</>;
};

export default UserProvider;
