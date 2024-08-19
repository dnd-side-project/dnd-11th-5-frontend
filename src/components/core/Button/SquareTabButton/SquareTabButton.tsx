import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  emoji: string;
  active?: boolean;
  label: string;
}

const SquareTabButton: FC<Props> = ({
  label,
  active = false,
  emoji,
  ...props
}) => {
  return (
    <button
      className={cn(
        "size-[108px] duration-300 rounded-[8px]",
        "flex flex-col items-center justify-center gap-[12px] mx-auto",
        active
          ? "bg-primary-05 border-[1px] border-primary-01"
          : "bg-gray-scale-50",
        props.className,
      )}
      {...props}
    >
      <div
        className={cn(
          "rounded-full duration mx-auto",
          "flex justify-center items-center text-[28px]",
        )}
      >
        {emoji ?? "🎊"}
      </div>
      <span className="max-w-[90px] truncate text-button2-medium text-gray-scale-700">
        {label}
      </span>
    </button>
  );
};

export default SquareTabButton;
