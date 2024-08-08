import Image from "next/image";
import React, { InputHTMLAttributes, useCallback } from "react";

import { cn } from "@/utils/cn";

import { IconButton } from "../core/Button";
import { CameraIcon, DeleteIcon } from "../icons";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label: string;
  value: File[] | undefined[];
  onChange: (files: (File | undefined)[]) => void;
}

export default function ImageUploader({
  onChange,
  value,
  label,
  ...props
}: Props) {
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [base64, setBase64] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragActive(true);
    },
    [isDragActive],
  );

  const handleDelete = (index: number) => {
    const files = value.filter((_, idx) => idx !== index);
    onChange(files);
    setBase64((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleChange = (
    event:
      | React.DragEvent<HTMLDivElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    let acceptedFiles: File[] = [];

    if (event.type === "drop") {
      event = event as React.DragEvent<HTMLDivElement>;
      acceptedFiles = Array.from(event.dataTransfer.files) as File[];
    } else if (
      event.target instanceof HTMLInputElement &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      acceptedFiles = Array.from(event.target.files) as File[];
    }

    if (acceptedFiles.length === 0) return;

    const updatedFiles = [...value, ...acceptedFiles].slice(-3);
    const newBase64: string[] = [];

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newBase64.push(reader.result as string);
        if (newBase64.length === acceptedFiles.length) {
          const updatedBase64 = [...base64, ...newBase64].slice(-3);
          setBase64(updatedBase64);
          onChange(updatedFiles);
        }
      };
    });

    setIsDragActive(false);
  };

  return (
    <div
      className={cn("w-full flex flex-col gap-[8px] relative")}
      onDrop={handleChange}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragActive(false)}
    >
      <label className="text-subtitle-medium" htmlFor={label}>
        {label}
      </label>
      {base64.length > 0 ? (
        <div className="flex h-[94px] w-full justify-start gap-[12px]">
          {base64.map((src, index) => (
            <div key={src + index} className="relative h-[94px] w-[94px] ">
              <Image fill src={src} alt={src} className="rounded-[8px]" />
              <IconButton
                className={cn(
                  "w-auto h-auto",
                  "flex justify-center items-center",
                  "absolute top-[6px] right-[6px]",
                )}
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon
                  width={26}
                  height={26}
                  className="rounded-full bg-gray-scale-50 text-gray-scale-400"
                />
              </IconButton>
            </div>
          ))}
          {base64.length < 3 && (
            <IconButton
              className={cn(
                "size-[94px] rounded-[8px] duration-300",
                "border-[1px] border-gray-scale-200",
                "flex justify-center items-center",
                isDragActive
                  ? "bg-primary-05 border-primary-05"
                  : "bg-gray-scale-0",
              )}
            >
              <CameraIcon width={26} height={26} className="text-primary-01" />
            </IconButton>
          )}
        </div>
      ) : (
        <button
          type="button"
          className={cn(
            "w-full h-[94px] duration-300 rounded-[8px]",
            "border-[1px] border-gray-scale-200",
            "flex justify-center items-center",
            isDragActive
              ? "bg-primary-05 border-primary-05"
              : "bg-gray-scale-0",
          )}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          <CameraIcon width={26} height={26} className="text-primary-01" />
          <input
            ref={inputRef}
            name={label}
            type="file"
            accept="image/*"
            hidden
            multiple
            onChange={handleChange}
            {...props}
          />
        </button>
      )}
    </div>
  );
}
