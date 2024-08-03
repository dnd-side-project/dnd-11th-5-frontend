import { FC, HtmlHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
}

const ReviewTag: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[30px] duration-300 rounded-[17px] py-[10px] px-[16px] border-[1px]",
        "flex flex-col items-center justify-center",
        "bg-gray-scale-0 border-gray-scale-100 text-gray-scale-500 text-caption1-medium",
        props.className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default ReviewTag;
