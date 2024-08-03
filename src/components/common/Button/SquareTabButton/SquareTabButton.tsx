import { FC, HtmlHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  active: boolean;
  label: string;
}

const SquareTabButton: FC<Props> = ({ label, active = false, ...props }) => {
  return (
    <button
      className={cn(
        "w-[108px] h-[108px] duration-300 rounded-[8px]",
        "flex flex-col items-center justify-center gap-[12px]",
        active ? "bg-primary-05 border-[1px] border-primary-01" : "bg-white",
        props.className,
      )}
      {...props}
    >
      <div
        className={cn(
          "w-[36px] h-[36px] rounded-full duration",
          active ? "bg-primary-03" : "bg-gray-scale-200",
        )}
      />
      <span className="max-w-[90px] truncate text-button2-medium text-gray-scale-700">
        {label}
      </span>
    </button>
  );
};

export default SquareTabButton;
