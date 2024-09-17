import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/utils/cn";

interface Props extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  active?: boolean;
  label: string;
  onClick?: () => void;
}

const BasicChip: FC<Props> = ({
  active = false,
  label,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[40px] duration-300 rounded-[48px] py-[12px] px-[24px] border-[1px] ",
        "flex flex-col items-center justify-center whitespace-nowrap",
        active
          ? "bg-primary-05 border-primary-01 text-gray-scale-800"
          : "bg-gray-scale-50 text-gray-scale-600",
        className,
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BasicChip;
