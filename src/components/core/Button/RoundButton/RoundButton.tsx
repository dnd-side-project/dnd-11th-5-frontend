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

const RoundButton: FC<Props> = ({ className, label, ...props }) => {
  return (
    <button
      type={props.type ?? "button"}
      className={cn(
        "w-auto h-auto rounded-[32px] py-[16px] px-[27px]",
        "flex flex-col items-center justify-center gap-[12px]",
        "bg-gray-scale-700 text-gray-scale-0",
        className,
      )}
      {...props}
    >
      <span className="whitespace-nowrap text-button1-medium">{label}</span>
    </button>
  );
};

export default RoundButton;
