import { create } from "zustand";

type State = {
  user: UserMeResponse | null;
};

type Action = {
  updateUser: (_user: UserMeResponse | null) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  user: null,
  updateUser: (user) => set(() => ({ user: user })),
}));
