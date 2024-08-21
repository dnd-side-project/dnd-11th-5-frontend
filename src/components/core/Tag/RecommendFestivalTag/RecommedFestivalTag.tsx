import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
}

const RecommedFestivalTag: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[32px] duration-300 rounded-[6px] py-[6px] px-[12px]",
        "flex items-center justify-center",
        "bg-gray-scale-900/50 text-button1-medium text-gray-scale-0 ",
        props.className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default RecommedFestivalTag;
