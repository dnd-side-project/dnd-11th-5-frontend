import { FC } from "react";

import { BadgesResponse } from "@/apis/user/badges/badgesType";

import MypageBadgeCount from "./MypageBadgeCount";
import MypageBadgeItem from "./MypageBadgeItem";

interface Props {
  badges: BadgesResponse;
}

const MypageBadges: FC<Props> = ({ badges }) => {
  const acquiredCount = badges.filter((badge) => badge.isAcquired).length;
  return (
    <div className="flex flex-col gap-[18px]">
      <MypageBadgeCount count={acquiredCount} />

      <div className="grid grid-cols-3 justify-between gap-[24px]">
        {badges.map((badge, index) => (
          <MypageBadgeItem key={badge.badgeName + index} badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default MypageBadges;
