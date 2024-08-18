import { ChangeEvent, forwardRef, HtmlHTMLAttributes, Ref } from "react";

import { cn } from "@/utils/cn";

import { IconButton } from "../core/Button";
import { CameraIcon } from "../icons";

interface Props extends Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  isDragActive: boolean;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
}

const ImagePlaceholder = forwardRef<HTMLInputElement, Props>(
  ({ label, isDragActive, onChange, ...props }, ref) => {
    return (
      <IconButton
        onClick={() => {
          if (ref && typeof ref !== "function" && ref.current) {
            ref.current.click();
          }
        }}
        className={cn(
          "w-full h-[94px] rounded-[8px] duration-300",
          "border-[1px] border-gray-scale-200",
          "flex justify-center items-center",
          isDragActive ? "bg-primary-05 border-primary-05" : "bg-gray-scale-0",
          props.className,
        )}
      >
        <CameraIcon width={26} height={26} className="text-primary-01" />
        <input
          ref={ref}
          name={label}
          type="file"
          accept="image/jpeg, image/png, image/webp, image/jpg"
          hidden
          multiple
          onChange={onChange}
          {...props}
        />
      </IconButton>
    );
  },
);

ImagePlaceholder.displayName = "ImagePlaceholder";

export default ImagePlaceholder;
