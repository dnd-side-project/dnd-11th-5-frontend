import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

import { IconButton } from "@/components/core/Button";
import { PencilIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props extends ComponentPropsWithoutRef<"button"> {}

const FloatingButton: FC<Props> = ({ className }) => {
  return (
    <Link href="/festivals/new">
      <IconButton
        className={cn(
          "w-auto h-auto p-[8px] rounded-full bg-primary-01 fixed bottom-[76px] right-[16px]",
          className,
        )}
      >
        <PencilIcon width={32} height={32} className="text-gray-scale-0" />
      </IconButton>
    </Link>
  );
};

export default FloatingButton;
