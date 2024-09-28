import { FC, InputHTMLAttributes } from "react";

import { ErrorIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "type" | "maxlength" | "className" | "maxLength"
  > {
  label?: string;
  maxLength?: number;
  currentLength?: number;
  className?: string;
  error?: string;
}

const DescriptionInput: FC<Props> = ({
  label,
  maxLength,
  currentLength = 0,
  className,
  error,
  ...props
}: Props) => {
  return (
    <div className="flex w-full flex-col items-start gap-[8px]">
      <label
        htmlFor={label}
        className="text-subtitle-medium text-gray-scale-900"
      >
        {label}
      </label>
      <textarea
        id={label}
        className={cn(
          "w-full rounded-[8px]  p-[16px] bg-gray-scale-0 border-[1px] duration resize-none",
          "text-caption2-medium placeholder:text-caption2-medium placeholder:text-gray-400 text-gray-scale-700 outline-none",
          error ? "border-error" : "border-gray-scale-200",
          className,
        )}
        {...props}
      />
      <div
        className={cn(
          "w-full flex min-h-[14px]",
          error ? "justify-between" : "justify-end",
        )}
      >
        {!!error && (
          <div className="flex h-auto w-full items-center justify-start gap-[2px]">
            <ErrorIcon width={10} height={10} className="text-error" />
            <span className="text-caption1-regular text-error">{error}</span>
          </div>
        )}
        {!!maxLength && (
          <span className="w-full text-right text-caption1-medium text-gray-500">{`${currentLength}/${maxLength}`}</span>
        )}
      </div>
    </div>
  );
};

export default DescriptionInput;
