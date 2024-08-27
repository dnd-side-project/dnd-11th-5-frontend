import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/utils/cn";

interface Props extends ComponentPropsWithoutRef<"button"> {
  label: string;
}

const ReviewTag: FC<Props> = ({ label, className }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[30px] duration-300 rounded-[17px] py-[10px] px-[16px] border-[1px]",
        "flex flex-col items-center justify-center whitespace-nowrap",
        "bg-gray-scale-0 border-gray-scale-100 text-gray-scale-500 text-caption1-medium",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default ReviewTag;
