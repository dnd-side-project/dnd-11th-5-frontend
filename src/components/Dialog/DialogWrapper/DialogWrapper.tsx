import * as Dialog from "@radix-ui/react-dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { FC } from "react";

import { cn } from "@/utils/cn";

interface Props extends DialogProps {
  isAutoFocusDisabled?: boolean;
}

const DialogWrapper: FC<Props> = ({
  open,
  onOpenChange,
  isAutoFocusDisabled = true,
  children,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 grid place-items-center overflow-y-auto bg-black/50" />
        <FocusScope trapped={!isAutoFocusDisabled}>
          <Dialog.Content
            className={cn(
              "w-full h-auto max-w-none lg:max-w-[450px] p-[16px]",
              "bg-white rounded-[12px]",
              "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ",
            )}
          >
            {children}
          </Dialog.Content>
        </FocusScope>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogWrapper;
