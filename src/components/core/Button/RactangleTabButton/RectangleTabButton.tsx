import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  active: boolean;
  label: string;
}

const RectangleTabButton: FC<Props> = ({ label, active = false, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full min-w-[150px] h-[66px] duration-300 rounded-[8px] p-4",
        "flex flex-col items-start justify-center gap-[12px]",
        active
          ? "bg-primary-05 border-[1px] border-primary-01"
          : "bg-gray-scale-0",
        props.className,
      )}
      {...props}
    >
      <span className="w-full max-w-[90%] truncate text-left text-button2-medium text-gray-scale-600">
        {label}
      </span>
    </button>
  );
};

export default RectangleTabButton;
