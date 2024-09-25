"use client";

import { FC, useEffect } from "react";

import { useUserStore } from "@/store/user";

interface Props {
  user: UserMeResponse | null;
  children: React.ReactNode;
}

const UserInitializer: FC<Props> = ({ user, children }) => {
  const userInfo = useUserStore((user) => user.user);
  const updateUser = useUserStore((user) => user.updateUser);

  useEffect(() => {
    if (userInfo?.userId === user?.userId) {
      return;
    }

    updateUser(user);
  }, []);

  return children;
};

export default UserInitializer;
