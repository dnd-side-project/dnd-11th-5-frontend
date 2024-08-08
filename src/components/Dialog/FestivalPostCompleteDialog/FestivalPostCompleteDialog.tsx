import { DialogProps } from "@radix-ui/react-dialog";
import Link from "next/link";
import { FC } from "react";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends DialogProps {}

const FestivalPostCompleteDialog: FC<Props> = ({
  open,
  onOpenChange,
  children,
  ...props
}) => {
  return (
    <AlertDialogWrapper
      open={open}
      onOpenChange={onOpenChange}
      title="Festival Posting Complete"
      className={"p-[24px]"}
    >
      <div className="flex h-full w-full flex-col  items-center gap-[12px]">
        <div className="flex flex-col items-center gap-[16px]">
          {/* <Image
            width={87}
            height={87}
            className="bg-primary-04 rounded-full"
            src=""
            alt="Festival Posting Complete"
          /> */}
          <div className="size-[87px] rounded-full bg-primary-04" />
          <div className="flex w-full flex-col items-center gap-[6px]">
            <h1 className="text-label-semi text-gray-scale-900">
              페스티벌 등록 완료!
            </h1>
            <span className="text-caption1-regular text-gray-scale-600">
              1-3일 후 피에스타에서 검토한 뒤 최종 등록될 예정이예요.{" "}
            </span>
          </div>
        </div>
        <Link
          href="/"
          prefetch
          className="border-b-[1px] border-gray-scale-500 pb-[4px] text-caption1-medium text-gray-scale-500"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </AlertDialogWrapper>
  );
};

export default FestivalPostCompleteDialog;
