import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  active?: boolean;
  label: string;
}

const ReviewChip: FC<Props> = ({ active = false, label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-auto duration-300 rounded-[17px] py-[12px] px-[16px] border-[1px] ",
        "flex flex-col items-center justify-center",
        active
          ? "bg-primary-05 border-primary-01 text-gray-scale-700"
          : "bg-gray-scale-0 border-gray-scale-100 text-gray-scale-500",
        props.className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default ReviewChip;
