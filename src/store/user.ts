import { User } from "next-auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  user: (User & UserMeResponse) | null;
};

type Action = {
  updateUser: (_user: (User & UserMeResponse) | null) => void;
};

export const useUserStore = create(
  persist<State & Action>(
    (set) => ({
      user: null,
      updateUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
