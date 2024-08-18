import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { FC } from "react";

import Calendar from "@/components/Calendar/Calendar";
import { IconButton } from "@/components/core/Button";
import { XIcon } from "@/components/icons";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends AlertDialogProps {
  title: string;
  onConfirm: (_startDate: string | null, _endDate: string | null) => void;
  startDate: string | null;
  endDate: string | null;
}

const CalendarDialog: FC<Props> = ({
  open,
  onOpenChange,
  title,
  onConfirm,
  startDate,
  endDate,
}) => {
  return (
    <AlertDialogWrapper open={open} onOpenChange={onOpenChange} title={title}>
      <section className="relative h-full w-full">
        <Calendar startDay={startDate} endDay={endDate} onConfirm={onConfirm} />
        <IconButton onClick={() => onOpenChange && onOpenChange(false)}>
          <XIcon
            width={24}
            height={24}
            className="absolute right-[16px] top-[6px] text-black"
          />
        </IconButton>
      </section>
    </AlertDialogWrapper>
  );
};

export default CalendarDialog;
