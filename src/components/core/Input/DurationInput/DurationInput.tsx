import { ButtonHTMLAttributes, FC, useState } from "react";

import { CalendarDialog } from "@/components/Dialog";
import { CalendarIcon } from "@/components/icons";
import { dayjsWithExt } from "@/lib/dayjs";
import { cn } from "@/utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  start: string | null;
  end: string | null;
  onConfirm: (_startDate: string | null, _endDate: string | null) => void;
}

const DurationInput: FC<Props> = ({
  label,
  className,
  onConfirm,
  start,
  end,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleConfirm = (startDate: string | null, endDate: string | null) => {
    const start = dayjsWithExt(startDate).isValid() ? startDate : null;
    const end = dayjsWithExt(endDate).isValid() ? endDate : null;
    onConfirm(start, end);
    setIsOpen(false);
  };

  const generateDateString = () => {
    if (start && !end) {
      return `${start} ~ ${start}`;
    }
    if (!start && end) {
      return `${end} ~ ${end}`;
    }
    if (start && end) {
      return `${start} ~ ${end}`;
    }
    return "페스티벌 진행 기간을 입력해주세요.";
  };

  return (
    <div className="flex w-full flex-col items-start gap-[8px]">
      <label
        htmlFor={label}
        className="text-subtitle-medium text-gray-scale-900"
      >
        {label}
      </label>
      <button
        type="button"
        id={label}
        onClick={handleToggle}
        className={cn(
          "w-full rounded-[8px]  p-[16px] bg-gray-scale-0 duration-300",
          "border-[1px] border-gray-scale-200",
          "placeholder:text-caption2-medium placeholder:text-gray-400 text-gray-scale-700",
          "flex gap-[8px] justify-start items-center",
          className,
        )}
        {...props}
      >
        <CalendarIcon
          width={16}
          height={16}
          className={!!start || !!end ? "text-primary-01" : "text-gray-400"}
        />
        <span
          className={cn(
            "!text-caption2-medium",
            !!start || !!end ? "text-gary-scale-700" : "text-gray-400",
          )}
        >
          {generateDateString()}
        </span>
      </button>
      {isOpen && (
        <CalendarDialog
          title="페스티벌 기간 등록"
          open={isOpen}
          onOpenChange={(status) => setIsOpen(status)}
          onConfirm={handleConfirm}
          startDate={start}
          endDate={end}
        />
      )}
    </div>
  );
};

export default DurationInput;
