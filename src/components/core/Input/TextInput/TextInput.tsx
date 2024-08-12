import { FC, forwardRef, InputHTMLAttributes, Ref } from "react";

import { ErrorIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "maxlength" | "className"
  > {
  label: string;
  maxlength?: number;
  currentLength?: number;
  className?: string;
  error?: string;
  isSubInput?: boolean;
}

const TextInput: FC<Props> = forwardRef(
  (
    {
      label,
      maxlength,
      currentLength = 0,
      className,
      error,
      isSubInput = false,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="flex w-full flex-col items-start gap-[8px]">
        <label
          htmlFor={label}
          className={cn(
            isSubInput
              ? "!text-caption2-medium text-gray-scale-500"
              : "text-subtitle-medium text-gray-scale-900",
            "",
          )}
        >
          {label}
        </label>
        <input
          type="text"
          id={label}
          ref={ref}
          className={cn(
            "w-full rounded-[8px]  p-[16px] bg-gray-scale-0 border-[1px] duration",
            "text-caption2-medium placeholder:text-caption2-medium placeholder:text-gray-400 text-gray-scale-700 outline-none",
            error ? "border-error" : "border-gray-scale-200",
            className,
          )}
          {...props}
        />
        <div
          className={cn(
            "w-full flex ",
            error ? "justify-between" : "justify-end",
          )}
        >
          {!!error && (
            <div className="flex h-auto w-full items-center justify-start gap-[2px]">
              <ErrorIcon width={14} height={14} className="text-error" />
              <span className="text-caption1-regular text-error">{error}</span>
            </div>
          )}
          {!!maxlength && (
            <span className="w-full text-right text-caption1-medium text-gray-500">{`${currentLength}/${maxlength}`}</span>
          )}
        </div>
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
