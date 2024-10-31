"use client";

import * as Toast from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { useEffect, useRef } from "react";

import { useToastStore } from "@/store/toastStore";
import { cn } from "@/utils";

import { XIcon } from "../icons";

const ToastProvider = () => {
  const open = useToastStore((state) => state.isToastOpen);
  const type = useToastStore((state) => state.type);
  const message = useToastStore((state) => state.message);
  const closeToast = useToastStore((state) => state.closeToast);
  const openToast = useToastStore((state) => state.openToast);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleModalToggle = () => {
    open ? closeToast() : openToast({ message: "" });
  };
  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        closeToast();
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [open, closeToast]);

  const toast = cva(["border", "border-color"], {
    variants: {
      type: {
        success: ["border-[2px]", "border-primary-01"],
        error: ["border-[2px]", "border-red-400"],
        warning: ["bobrder-[2px]", "border-yellow-400"],
      },
    },
    defaultVariants: {
      type: "success",
    },
  });

  return (
    <Toast.ToastProvider>
      <Toast.Root
        className={cn(
          `bg-white rounded-lg shadow-[0_10px_38px_-10px_rgba(0,0,0,0.35),0_10px_20px_-15px_rgba(0,0,0,0.2)] p-4`,
          `grid grid-areas-toast-root grid-cols-[auto_max-content]`,
          `gap-x-4 items-center`,
          `data-[state=open]:animate-slideIn`,
          `data-[state=closed]:animate-hide`,
          `data-[swipe=move]:translate-x-[100px]`,
          `data-[swipe=cancel]:translate-x-0 `,
          `data-[swipe=cancel]:transition-transform `,
          `data-[swipe=end]:animate-swipeOut`,
          `ease-out`,
          `flex flex-col relative`,
          toast({ type }),
        )}
        open={open}
        onOpenChange={handleModalToggle}
      >
        <Toast.Title className="text-subtitle-bold text-gray-scale-900">
          {message}
        </Toast.Title>

        <Toast.Action
          className="grid-area-action absolute right-[5px] top-[5px] cursor-pointer"
          asChild
          altText="close button"
        >
          <XIcon width="20px" height="20px" />
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-full list-none flex-col gap-[10px] p-[25px] outline-none" />
    </Toast.ToastProvider>
  );
};

export default ToastProvider;
