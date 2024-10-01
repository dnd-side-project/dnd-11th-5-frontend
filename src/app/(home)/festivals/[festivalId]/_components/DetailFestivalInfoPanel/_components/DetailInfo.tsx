import parse from "html-react-parser";
import React, { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { formatToKoreanDate } from "@/lib/dayjs";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailInfo: FC<Props> = ({ festivals }) => {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[12px] bg-gray-scale-100 px-[16px] py-[18px]">
      <div className="flex gap-[18px]">
        <span className="whitespace-nowrap text-body2-medium text-gray-scale-400">
          진행기간
        </span>
        <span className="text-body2-regular text-gray-scale-700">
          {`${formatToKoreanDate(festivals.startDate)} - 
        ${formatToKoreanDate(festivals.endDate)}`}
        </span>
      </div>
      <div className="flex gap-[18px]">
        <span className="whitespace-nowrap text-body2-medium text-gray-scale-400">
          진행시간
        </span>
        <span className="text-body2-regular text-gray-scale-700">
          {parse(festivals.playtime)}
        </span>
      </div>
      <div className="flex gap-[18px] ">
        <span className="whitespace-nowrap text-body2-medium text-gray-scale-400">
          홈페이지
        </span>
        <span className="flex gap-[4px] text-body2-regular text-gray-scale-700">
          {!!festivals.homepageUrl && (
            <a
              className="text-primary-01 underline underline-offset-4"
              href={festivals.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              공식홈페이지
            </a>
          )}
          {!!festivals.instagramUrl && (
            <a
              className="text-primary-01 underline underline-offset-4"
              href={festivals.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`@${festivals.instagramUrl.split("com/")[1]}`}
            </a>
          )}
          {!!festivals.ticketLink && (
            <a
              className="text-primary-01 underline underline-offset-4"
              href={festivals.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              예매사이트
            </a>
          )}
        </span>
      </div>
      <div className="flex gap-[18px]">
        <span className="whitespace-nowrap text-body2-medium text-gray-scale-400">
          입장비용
        </span>
        <span className="text-body2-regular text-gray-scale-700">
          {parse(festivals.fee)}
        </span>
      </div>
    </div>
  );
};

export default DetailInfo;
