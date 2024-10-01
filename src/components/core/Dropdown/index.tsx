import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { FC } from "react";

import { DotsIcon } from "@/components/icons";
import { cn } from "@/utils";

export interface DropdownOption {
  label: string;
  onClick: () => void;
}

interface Props {
  options: Array<DropdownOption>;
}

const DropdownMenu: FC<Props> = ({ options }) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button type="button">
            <DotsIcon
              width="24px"
              height="24px"
              className="rotate-90 text-gray-scale-400"
            />
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cn(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-auto rounded-lg shadow-md whitespace-nowrap",
              " bg-gray-scale-0",
            )}
          >
            {options.map(({ label, onClick }) => (
              <DropdownMenuPrimitive.Item
                key={`dropdown-item-${label}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-[18px] py-[10px]  text-body2-medium outline-none",
                  "text-gray-500 focus:bg-gray-50",
                )}
                onClick={onClick}
              >
                <span className="grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export { DropdownMenu };
