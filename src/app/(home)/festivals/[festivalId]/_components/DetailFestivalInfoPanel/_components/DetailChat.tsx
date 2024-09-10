import Image from "next/image";
import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { ArrowRightSmallIcon } from "@/components/icons";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailChat: FC<Props> = ({ festivals }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex w-full justify-between">
        <span>{`'${festivals.name}' 실시간 채팅`}</span>
        <ArrowRightSmallIcon
          width={20}
          heifht={20}
          className="cursor-not-allowed text-gray-scale-500"
        />
      </div>
      <div className="flex h-[140px] w-full flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] border-gray-scale-200 bg-gray-scale-0">
        <Image
          src="/images/fallbackLogo.png"
          alt="service"
          width={76}
          height={76}
        />
        <span className="text-body2-medium text-gray-scale-600">
          서비스 준비 중이에요!
        </span>
      </div>
    </div>
  );
};

export default DetailChat;
