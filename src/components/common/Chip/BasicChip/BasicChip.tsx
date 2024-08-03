import { FC, HtmlHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  active?: boolean;
  label: string;
}

const ReviewChip: FC<Props> = ({ active = false, label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[40px] duration-300 rounded-[48px] py-[12px] px-[24px] border-[1px] ",
        "flex flex-col items-center justify-center",
        active
          ? "bg-primary-05 border-primary-01 text-gray-scale-800"
          : "bg-gray-scale-0 border-gray-scale-50 text-gray-scale-600",
        props.className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default ReviewChip;
