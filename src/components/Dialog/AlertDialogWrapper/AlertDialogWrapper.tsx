import * as AlertDialog from "@radix-ui/react-alert-dialog";
import React, { FC } from "react";

import { cn } from "@/utils/cn";

interface Props extends AlertDialog.AlertDialogProps {
  title: string;
  className?: string;
}

const AlertDialogWrapper: FC<Props> = ({
  open,
  onOpenChange,
  children,
  title,
  className,
}) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className="fixed inset-0 grid animate-fadeIn place-items-center overflow-y-auto bg-black/50"
          onClick={() => onOpenChange && onOpenChange(false)}
        />
        <AlertDialog.Content
          className={cn(
            "w-full h-auto max-w-none lg:max-w-[450px] p-[16px]",
            "bg-white rounded-[12px]",
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeIn",
            className,
          )}
        >
          <AlertDialog.Title hidden>{title}</AlertDialog.Title>
          {children}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogWrapper;
