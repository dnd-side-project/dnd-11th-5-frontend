import React, { HtmlHTMLAttributes } from "react";
import { FC } from "react";

// import { X_ICON } from "@/components/icons";
import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
}

const DateTag: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-auto duration-300 rounded-[6px] py-[6px] px-[12px]",
        "flex items-center justify-center",
        "bg-primary-01 text-caption1-medium text-gray-scale-0",
        props.className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default DateTag;
