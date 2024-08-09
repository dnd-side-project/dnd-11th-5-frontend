import Image from "next/image";
import { FC } from "react";

import { cn } from "@/utils/cn";

import { IconButton } from "../core/Button";
import { DeleteIcon } from "../icons";

interface Props {
  index: number;
  src: string;
  onDelete: (_index: number) => void;
}

const ImagePreview: FC<Props> = ({ src, index, onDelete }) => {
  return (
    <div className="relative h-[94px] w-[94px] ">
      <Image fill src={src} alt={src} className="rounded-[8px]" />
      <IconButton
        className={cn(
          "flex justify-center items-center",
          "absolute top-[6px] right-[6px]",
        )}
        onClick={() => onDelete(index)}
      >
        <DeleteIcon
          width={26}
          height={26}
          className="rounded-full bg-gray-scale-50 text-gray-scale-400"
        />
      </IconButton>
    </div>
  );
};

export default ImagePreview;
