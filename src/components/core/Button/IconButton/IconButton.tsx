import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const IconButton: FC<Props> = ({ active = false, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-auto duration-300",
        "flex items-center justify-center",
        active ? " text-primary-01" : " text-gray-scale-400",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
