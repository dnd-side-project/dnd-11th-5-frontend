import Image from "next/image";
import React, { FC } from "react";

import { Badge } from "@/apis/user/badges/badgesType";

interface Props {
  badge: Badge;
}

const MypageBadgeItem: FC<Props> = ({ badge }) => {
  return (
    <div className="flex w-auto flex-col items-center justify-center gap-[6px]">
      <Image
        priority
        className={badge.isAcquired ? "" : "grayscale"}
        src={badge.imageUrl}
        alt={badge.badgeName}
        width={96}
        height={96}
      />
      <div className="flex flex-col">
        <span className="text-center text-body2-semi text-gray-scale-600">
          {badge.badgeName}
        </span>
        <span className="text-center text-caption1-regular text-gray-scale-600">
          {badge.description}
        </span>
      </div>
    </div>
  );
};

export default MypageBadgeItem;
