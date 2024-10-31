import { create } from "zustand";

type ToastType = "success" | "error" | "warning";

type State = {
  isToastOpen: boolean;
  message: string;
  type: ToastType;
};

type Action = {
  openToast: ({ message, type }: { message: string; type?: ToastType }) => void;
  closeToast: () => void;
};

export const useToastStore = create<State & Action>((set) => ({
  isToastOpen: false,
  message: "",
  type: "success",
  openToast: ({ message, type }: { message: string; type?: ToastType }) =>
    set(() => ({ message, type, isToastOpen: true })),
  closeToast: () => set(() => ({ isToastOpen: false })),
}));
