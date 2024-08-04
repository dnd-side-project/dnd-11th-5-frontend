import { FC, forwardRef, InputHTMLAttributes, Ref } from "react";

import { cn } from "@/utils/cn";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "maxlength" | "className"
  > {
  label: string;
  maxlength: number;
  currentLength?: number;
  className?: string;
}

const TextInput: FC<Props> = forwardRef(
  (
    { label, maxlength, currentLength = 0, className, ...props }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="flex w-full flex-col items-start gap-[8px]">
        <label
          htmlFor={label}
          className="text-subtitle-medium text-gray-scale-900"
        >
          {label}
        </label>
        <input
          type="text"
          id={label}
          ref={ref}
          className={cn(
            "w-full rounded-[8px] text-caption2-medium placeholder:text-caption2-medium p-[16px] bg-gray-scale-0 border-[1px] border-gray-scale-200 placeholder:text-gray-400 outline-none text-gray-scale-700",
            className,
          )}
          {...props}
        />

        <span className="w-full text-right text-caption1-medium text-gray-500">{`${currentLength}/${maxlength}`}</span>
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
