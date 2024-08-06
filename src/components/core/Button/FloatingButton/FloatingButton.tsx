import { ButtonHTMLAttributes, FC } from "react";

import { PencilIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

import IconButton from "../IconButton/IconButton";

export interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "label" | "className"
  > {
  className?: string;
}

const BasicButton: FC<Props> = ({ className, ...props }) => {
  return (
    <IconButton
      icon={<PencilIcon width={32} height={32} className="text-gray-scale-0" />}
      className={cn(
        "w-auto h-auto p-[8px] rounded-full bg-primary-01",

        className,
      )}
      {...props}
    />
  );
};

export default BasicButton;
