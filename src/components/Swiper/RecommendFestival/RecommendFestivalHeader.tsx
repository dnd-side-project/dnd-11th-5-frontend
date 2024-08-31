import Image from "next/image";

import { UserTypeImage, UserTypeText } from "@/utils";

const RecommendFestivalHeader = ({
  userType,
}: {
  userType: {
    userTypeId: number;
    name: string;
  };
}) => {
  const userTypeTextColor = UserTypeText[userType.userTypeId ?? 1];
  const userTypeImage = UserTypeImage[userType.userTypeId ?? 1];

  return (
    <div className="relative flex w-full justify-between">
      <div className="flex w-1/2 flex-wrap pb-[18px] text-title-bold">
        <span className={userTypeTextColor}>{userType.name}</span>
        <span>들을</span>
        <span>위한 페스티벌이에요!</span>
      </div>
      <Image
        className="absolute bottom-[-15px] right-[20px]"
        src={userTypeImage ?? "/images/fallbackLogo.png"}
        alt={userType.name}
        width={109}
        height={109}
      />
    </div>
  );
};

export default RecommendFestivalHeader;
