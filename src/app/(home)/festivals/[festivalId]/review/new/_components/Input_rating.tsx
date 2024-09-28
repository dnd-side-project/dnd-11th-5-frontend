"use client";

import React, { FC } from "react";

import { StarIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props {
  label: string;
  value: number;
  onChange: (_rate: number) => void;
}

const Input_rating: FC<Props> = ({ label, value, onChange }) => {
  const handleClick = (rate: number) => {
    onChange(rate);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-subtitle-medium text-gray-scale-900">{label}</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            width={36}
            height={36}
            className={cn(
              "cursor-pointer",
              star <= value ? "text-primary-01" : "text-gray-scale-200",
            )}
            onClick={() => handleClick(star)}
          />
        ))}
      </div>
    </div>
  );
};

export default Input_rating;
