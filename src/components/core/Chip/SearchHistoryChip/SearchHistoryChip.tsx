import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

import { XIcon } from "../../../icons";

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
}

const SearchHistoryChip: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[32px] duration-300 rounded-[6px] py-[8px] px-[12px]",
        "flex items-center justify-center gap-[12px]",
        "bg-gray-scale-0 border-[1px] border-gray-scale-100",
        props.className,
      )}
      {...props}
    >
      <span className="w-auto text-button2-medium text-gray-scale-500">
        {label}
      </span>
      <XIcon className="h-[16px] w-[16px] text-gray-scale-500" />
    </button>
  );
};

export default SearchHistoryChip;
