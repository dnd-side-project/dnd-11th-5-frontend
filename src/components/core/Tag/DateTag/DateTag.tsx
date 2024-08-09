import { ButtonHTMLAttributes } from "react";
import { FC } from "react";

// import { X_ICON } from "@/components/icons";
import { cn } from "@/utils/cn";

export interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > {
  className?: string;
  label: string;
}

const DateTag: FC<Props> = ({ label, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        className,
        "w-auto h-[26px] duration-300 rounded-[6px] py-[6px] px-[12px]",
        "flex items-center justify-center",
        "bg-primary-01 text-caption1-medium text-gray-scale-0",
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default DateTag;
