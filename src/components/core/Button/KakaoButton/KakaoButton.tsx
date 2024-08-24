"use client";

import { ButtonHTMLAttributes, FC } from "react";

import { KakaoIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label?: string;
}

const KakaoButton: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      type="submit"
      className={cn(
        "w-full h-[48px] duration-300 rounded-[8px] px-[14px]",
        "flex items-center justify-center",
        "text-gray-scale-900 bg-kakao",
        props.className,
      )}
      {...props}
    >
      <KakaoIcon width={18} height={18} />
      <div className="min-w-[260px] truncate text-button1-semi">
        {label ?? "카카오 로그인"}
      </div>
    </button>
  );
};

export default KakaoButton;
