import { ButtonHTMLAttributes, FC, ReactElement } from "react";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon?: ReactElement;
  label: string;
}

const RegistorButton: FC<Props> = ({ label, icon, ...props }) => {
  return (
    <button
      className={cn(
        "w-full h-[48px] duration-300 rounded-[12px] py-[8px] px-[12px]",
        "flex items-center justify-center gap-[6px]",
        " text-primary-01 bg-primary-05",
        props.className,
      )}
      {...props}
    >
      {icon ? icon : <PlusIcon width={16} height={16} />}
      <div className="w-[90%] truncate text-button2-medium">{label}</div>
    </button>
  );
};

export default RegistorButton;
