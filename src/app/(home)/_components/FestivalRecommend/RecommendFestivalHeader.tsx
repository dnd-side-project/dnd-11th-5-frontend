import Image from "next/image";
import { FC } from "react";

import { UserType } from "@/apis/festivals/recommendFestival/recommendFestivalType";
import { UserTypeImage, UserTypeText } from "@/utils";

interface Props {
  userType: UserType;
}

const RecommendFestivalHeader: FC<Props> = ({ userType }) => {
  return (
    <div className="relative flex w-full justify-between">
      <div className="flex w-1/2 flex-wrap pb-[18px] text-title-bold">
        <span className={UserTypeText[userType.userTypeId ?? 1]}>
          {userType.name}
        </span>
        <span>들을</span>
        <span>위한 페스티벌이에요!</span>
      </div>
      <Image
        className="absolute bottom-[-15px] right-[20px]"
        src={
          UserTypeImage[userType.userTypeId ?? 1] ?? "/images/fallbackLogo.png"
        }
        alt={userType.name}
        width={109}
        height={109}
      />
    </div>
  );
};

export default RecommendFestivalHeader;
