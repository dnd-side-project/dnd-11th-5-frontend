import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > {
  active: boolean;
  label: string;
  className?: string;
}

const BasicTile: FC<Props> = ({ active, label, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full h-[54px] duration-300 rounded-[6px] p-[16px]",
        "flex items-center justify-center",
        active
          ? "border-[1px] border-primary-01 bg-primary-05"
          : "bg-gray-scale-50 text-gray-scale-600",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "w-full text-left  text-gray-scale-600",
          "text-button2-medium whitespace-nowrap",
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default BasicTile;
