import { Button, ButtonProps } from "@radix-ui/themes";
import { FC } from "react";

import { cn } from "@/utils/cn";

export interface Props extends ButtonProps {
  active: boolean;
}

const SquareTabButton: FC<Props> = ({ active = false, ...props }) => {
  return (
    <Button
      className={cn(
        "w-[108px] h-[108px] duration-300",
        active ? "bg-primary-01" : "bg-primary-04",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default SquareTabButton;
