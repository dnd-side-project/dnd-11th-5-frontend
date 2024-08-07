import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "label" | "className"
  > {
  label: string;
  className?: string;
}

const BasicButton: FC<Props> = ({ className, label, ...props }) => {
  return (
    <button
      className={cn(
        "w-full h-[48px] duration-300 rounded-[12px] py-[8px] px-[12px]",
        "flex flex-col items-center justify-center gap-[12px]",
        "text-button1-semi whitespace-nowrap",
        "bg-gray-scale-700 text-gray-scale-0",
        "disabled:bg-gray-scale-100 disabled:text-gray-scale-400",
        className,
      )}
      {...props}
    >
      <div className="w-[90%] truncate">{label}</div>
    </button>
  );
};

export default BasicButton;
