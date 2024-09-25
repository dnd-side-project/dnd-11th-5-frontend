"use client";

import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import { FC } from "react";

import { signInWithKakao } from "@/apis/auth/auth";
import { IconButton } from "@/components/core/Button";
import { XIcon } from "@/components/icons";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends AlertDialogProps {}

const LoginRequiredDialog: FC<Props> = ({ open, onOpenChange }) => {
  return (
    <AlertDialogWrapper
      open={open}
      onOpenChange={onOpenChange}
      title="Festival Posting Complete"
      className={"p-[24px]"}
    >
      <div className="flex h-full w-full flex-col items-center gap-[12px]">
        <div className="flex w-full justify-end">
          <IconButton onClick={() => onOpenChange && onOpenChange(false)}>
            <XIcon width={24} height={24} className="text-gray-scale-700" />
          </IconButton>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <Image
            width={87}
            height={87}
            className="rounded-full"
            src="/images/romantist.png"
            alt="Festival Posting Complete"
          />
          <div className="flex w-full flex-col items-center gap-[6px]">
            <h1 className="text-label-semi text-gray-scale-900">
              로그인이 필요해요 !
            </h1>
          </div>
        </div>
        <form
          action={signInWithKakao}
          className="flex w-full flex-col items-center gap-[11px] px-[16px]"
        >
          <button
            type="submit"
            className="border-b-[1px] border-gray-scale-400 pb-[4px] text-caption1-medium text-gray-scale-400"
          >
            로그인 하러가기
          </button>
        </form>
      </div>
    </AlertDialogWrapper>
  );
};

export default LoginRequiredDialog;
