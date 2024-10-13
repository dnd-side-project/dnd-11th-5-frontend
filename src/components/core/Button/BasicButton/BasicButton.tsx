import { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/utils/cn";

interface Props<T extends ElementType> {
  as?: T;
  label: string;
  className?: string;
}

const BasicButton = <T extends ElementType = "button">({
  as,
  className,
  label,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";
  return (
    <Component
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
      <div className="max-w-[90%] truncate">{label}</div>
    </Component>
  );
};

export default BasicButton;
