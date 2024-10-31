/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { getMe, updateMe } from "@/apis/user/me/me";
import { meKeys } from "@/apis/user/me/meKeys";
import { useUserStore } from "@/store/userStore";
import { ProfileMeUpdateSchemaType } from "@/validations/ProfileUpdateMeSchema";

export const useProfile = () => {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const { update } = useSession();
  const queryClient = useQueryClient();

  const { mutate: updateUserMutate } = useMutation({
    mutationFn: async (body: ProfileMeUpdateSchemaType) => await updateMe(body),
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: meKeys.all,
      });
      const user = await getMe();
      updateUser(user);
      update({ user });
    },
  });

  return {
    user,
    updateUserMutate,
  };
};
