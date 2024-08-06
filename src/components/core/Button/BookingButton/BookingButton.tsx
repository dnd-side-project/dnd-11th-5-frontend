import { FC } from "react";

import { ScrabIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

import BasicButton from "../BasicButton/BasicButton";

interface Props {
  label?: string;
  className?: string;
  isScrabed?: boolean;
  scrabCount?: number;
  disabled?: boolean;
}

const BookingButton: FC<Props> = ({
  className,
  label = "예매하기",
  isScrabed = false,
  scrabCount = 0,
  disabled = true,
}) => {
  return (
    <div
      className={cn(
        "w-full h-[98px] p-[24px]",
        "flex justify-between items-center gap-[11px]",
        "border-[1px] border-gray-scale-100",
        "bg-gray-scale-0",
        className,
      )}
    >
      <BasicButton type="button" label={label} disabled={disabled} />
      <button className="flex flex-col items-center">
        <ScrabIcon
          width={30}
          height={30}
          className={isScrabed ? "text-gray-scale-700" : "text-gray-scale-200"}
        />
        <span className="h-auto w-auto text-caption1-medium text-gray-700">
          {scrabCount}
        </span>
      </button>
    </div>
  );
};

export default BookingButton;
