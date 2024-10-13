import {
  ChangeEvent,
  DragEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/utils/cn";

import ImagePlaceholder from "./ImagePlaceholder";
import ImagePreview from "./ImagePreview";

const MAX_COUNT = 3;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label: string;
  value: File[];
  onChange: (_files: File[]) => void;
}

const ImageUploader = ({ onChange, value, label }: Props) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [base64, setBase64] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDelete = (index: number) => {
    const files = value.filter((_, idx) => idx !== index);
    onChange(files);
    setBase64((prev) => prev.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    if (value.length > 0) {
      const newBase64: string[] = [];
      value.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          newBase64.push(reader.result as string);
          if (newBase64.length === value.length) {
            setBase64(newBase64.slice(-MAX_COUNT));
          }
        };
      });
    } else {
      setBase64([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    event: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    let acceptedFiles: File[] = [];

    if (event.type === "drop") {
      event = event as DragEvent<HTMLDivElement>;
      acceptedFiles = Array.from(event.dataTransfer.files) as File[];
    } else if (
      event.target instanceof HTMLInputElement &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      acceptedFiles = Array.from(event.target.files) as File[];
    }

    if (acceptedFiles.length === 0) return;

    const updatedFiles = [...value, ...acceptedFiles].slice(-MAX_COUNT);
    const newBase64: string[] = [];

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newBase64.push(reader.result as string);
        if (newBase64.length === acceptedFiles.length) {
          const updatedBase64 = [...base64, ...newBase64].slice(-MAX_COUNT);
          setBase64(updatedBase64);
          onChange(updatedFiles);
        }
      };
    });

    setIsDragActive(false);
  };

  const renderImageComponent = () => {
    if (base64.length === 0) {
      return (
        <ImagePlaceholder
          ref={inputRef}
          label={label}
          isDragActive={isDragActive}
          onChange={(e) => handleChange(e)}
        />
      );
    }

    if (base64.length > 0) {
      return (
        <div className="flex h-[94px] w-full justify-start gap-[12px]">
          {base64.map((src, index) => (
            <ImagePreview
              key={src + index}
              src={src}
              index={index}
              onDelete={() => handleDelete(index)}
            />
          ))}
          {base64.length < MAX_COUNT && (
            <ImagePlaceholder
              ref={inputRef}
              className="w-[94px]"
              label={label}
              isDragActive={isDragActive}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
      );
    }
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
      {renderImageComponent()}
    </div>
  );
};

export default ImageUploader;
