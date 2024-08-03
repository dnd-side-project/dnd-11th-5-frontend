import { FC, HtmlHTMLAttributes } from "react";

// import { X_ICON } from "@/components/icons";
import { cn } from "@/utils/cn";

export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "children"> {
  active: boolean;
  label: string;
}

const BasicTile: FC<Props> = ({ active, label, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full h-[54px] duration-300 rounded-[6px] p-[16px]",
        "flex items-center justify-center",
        active
          ? "border-[1px] border-primary-01 bg-primary-05"
          : "bg-gray-scale-50",
        props.className,
      )}
      {...props}
    >
      <span className="w-full text-left text-caption2-medium text-gray-scale-600">
        {label}
      </span>
    </button>
  );
};

export default BasicTile;
