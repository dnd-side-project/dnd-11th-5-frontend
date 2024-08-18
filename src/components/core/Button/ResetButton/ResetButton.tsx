import { FC } from "react";

import { cn } from "@/utils/cn";

import BasicButton from "../BasicButton/BasicButton";

interface Props {
  className?: string;
  disabled?: boolean;
  onReset: () => void;
  onClick: () => void;
  label?: string;
}

const ResetButton: FC<Props> = ({
  className,
  onReset,
  onClick,
  label = "적용하기",
  disabled = true,
}) => {
  return (
    <div
      className={cn("w-full h-auto", "grid grid-cols-3 gap-[7px]", className)}
    >
      <button
        type="button"
        onClick={onReset}
        className="col-span-1 rounded-[8px] border-[1px] border-gray-scale-200 text-subtitle-medium text-gray-scale-400"
      >
        초기화
      </button>
      <BasicButton
        type="button"
        label={label}
        disabled={disabled}
        className="col-span-2"
        onClick={onClick}
      />
    </div>
  );
};

export default ResetButton;
