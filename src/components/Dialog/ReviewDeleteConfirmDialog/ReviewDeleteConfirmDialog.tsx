import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { FC } from "react";

import { BasicButton } from "@/components/core/Button";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends AlertDialogProps {
  title: string;
  onConfirm: () => void;
}

const ReviewDeleteConfirmDialog: FC<Props> = ({
  open,
  onOpenChange,
  onConfirm,
  title,
}) => {
  return (
    <AlertDialogWrapper
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      className="px-[24px] py-[30px]"
    >
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-center text-title-bold text-gray-scale-700">
          방문일지를 삭제하실 건가요?
        </h1>
        <div className="flex w-full gap-[8px]">
          <BasicButton
            label="아니요"
            className="border-[1px] border-gray-scale-200 bg-gray-scale-0 text-gray-scale-400"
            onClick={() => onOpenChange && onOpenChange(false)}
          />
          <BasicButton
            label="네"
            className="bg-primary-01"
            onClick={onConfirm}
          />
        </div>
      </div>
    </AlertDialogWrapper>
  );
};

export default ReviewDeleteConfirmDialog;
