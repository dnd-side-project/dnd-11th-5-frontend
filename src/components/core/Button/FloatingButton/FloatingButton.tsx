import { ButtonHTMLAttributes, FC } from "react";

import { IconButton } from "@/components/core/Button";
import { PencilIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

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
      className={cn(
        "w-auto h-auto p-[8px] rounded-full bg-primary-01",

        className,
      )}
      {...props}
    >
      <PencilIcon width={32} height={32} className="text-gray-scale-0" />
    </IconButton>
  );
};

export default BasicButton;
