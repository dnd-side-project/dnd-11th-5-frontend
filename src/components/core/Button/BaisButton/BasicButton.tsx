import { FC, HtmlHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  active: boolean;
  label: string;
}

const BasicButton: FC<Props> = ({ label, active = false, ...props }) => {
  return (
    <button
      className={cn(
        "w-full h-[48px] duration-300 rounded-[12px] py-[8px] px-[12px]",
        "flex flex-col items-center justify-center gap-[12px]",
        "text-button1-semi whitespace-nowrap",
        active
          ? "bg-gray-scale-700 text-gray-scale-0 "
          : "bg-gray-scale-100 text-gray-scale-400",
        props.className,
      )}
      {...props}
    >
      <div className="w-[90%] truncate">{label}</div>
    </button>
  );
};

export default BasicButton;
