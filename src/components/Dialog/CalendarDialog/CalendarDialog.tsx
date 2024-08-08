import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { FC } from "react";

import Calendar from "@/components/Calendar/Calendar";
import { BasicButton, IconButton } from "@/components/core/Button";
import { XIcon } from "@/components/icons";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends AlertDialogProps {
  title: string;
}

const CalendarDialog: FC<Props> = ({ open, onOpenChange, title }) => {
  return (
    <AlertDialogWrapper open={open} onOpenChange={onOpenChange} title={title}>
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
    </AlertDialogWrapper>
  );
};

export default CalendarDialog;
