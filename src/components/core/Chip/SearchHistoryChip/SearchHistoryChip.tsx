"use client";

import { ComponentPropsWithoutRef, FC, useEffect, useState } from "react";

import { XIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props
  extends Pick<ComponentPropsWithoutRef<"button">, "onClick" | "className"> {
  text: string;
}

const SearchHistoryChip: FC<Props> = ({ text, className, onClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className={cn(
        "w-auto h-[32px] duration-300 rounded-[6px] py-[8px] px-[12px]",
        "flex items-center justify-center gap-[12px]",
        "bg-gray-scale-100",
        className,
      )}
      onClick={onClick}
    >
      <span className="w-auto whitespace-nowrap text-button2-medium text-gray-scale-500">
        {text}
      </span>
      <XIcon className="h-[16px] w-[16px] text-gray-scale-500" />
    </button>
  );
};

export default SearchHistoryChip;
