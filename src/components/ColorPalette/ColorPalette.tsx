import { Box, Flex } from "@radix-ui/themes";
import { BoxOwnProps } from "@radix-ui/themes/props";
import { FC } from "react";

import { cn } from "@/utils/cn";

interface PalleteProps extends Omit<BoxOwnProps, "className"> {
  colors: { name: string; className: string; hex: string }[];
  className?: string;
}

const ColorPalette: FC<PalleteProps> = ({ colors, className, ...props }) => {
  return (
    <div className={cn("grid grid-cols-5 gap-4", className)} {...props}>
      {colors.map((color) => (
        <Flex key={color.name} className="flex-col">
          <Box
            className={cn(
              "w-[100px] h-[100px] rounded-[12px]",
              color.className,
            )}
          />
          <div className="text-start text-sm">{color.name}</div>
          <code className="text-start text-sm">{color.hex}</code>
        </Flex>
      ))}
    </div>
  );
};

export default ColorPalette;
