import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  active?: boolean;
  icon: React.ReactNode;
}

const IconButton: FC<Props> = ({ icon, active = false, ...props }) => {
  return (
    <button
      className={cn(
        "w-auto h-auto duration-300",
        "flex items-center justify-center",
        active ? " text-primary-01" : " text-gray-scale-400",
        props.className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
