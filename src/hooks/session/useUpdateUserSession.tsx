"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { useUserStore } from "@/store/user";

const useUpdateUserSession = () => {
  const searchParams = useSearchParams();
  const setUser = useUserStore((state) => state.updateUser);
  const { data: session, update } = useSession();

  const handleSessionUpdate = async () => {
    try {
      if (session) {
        session.user.userTypeId = Number(searchParams.get("userTypeId"));
        session.user.isProfileRegistered = true;
        await update(session);
        setUser(session.user ?? null);
      }
    } catch (error) {
      console.error("Failed to update session:", error);
    }
  };

  useEffect(() => {
    handleSessionUpdate();
  }, []);
};

export default useUpdateUserSession;
