import { DialogProps } from "@radix-ui/react-dialog";
import React, { FC } from "react";

import Calendar from "@/components/Calendar/Calendar";
import { BasicButton, IconButton } from "@/components/core/Button";
import { XIcon } from "@/components/icons";

import DialogWrapper from "../DialogWrapper/DialogWrapper";

interface Props extends DialogProps {}

const DialogCalendar: FC<Props> = ({ open, onOpenChange }) => {
  return (
    <DialogWrapper open={open} onOpenChange={onOpenChange}>
      <section className="relative h-full w-full">
        <Calendar />
        <IconButton onClick={() => onOpenChange && onOpenChange(false)}>
          <XIcon
            width={24}
            height={24}
            className="absolute right-[16px] top-[6px] text-black"
          />
        </IconButton>

        <div className="flex w-full justify-end">
          <BasicButton label={"선택완료"} className="max-w-[126px]" />
        </div>
      </section>
    </DialogWrapper>
  );
};

export default DialogCalendar;
