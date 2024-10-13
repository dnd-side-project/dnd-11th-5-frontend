import parse from "html-react-parser";
import Link from "next/link";
import { FC } from "react";
import { StaticMap } from "react-kakao-maps-sdk";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { PinLocationIcon } from "@/components/icons";

interface Props {
  festivals: DetailFestivalResponse;
}

const Detail: FC<Props> = ({ festivals }) => {
  const { description, tip, latitude, longitude, address } = festivals;

  const getRedirectLink = () => {
    if (!!latitude && !!longitude) {
      return `https://map.kakao.com/link/map/${latitude},${longitude}`;
    }
    return `https://map.kakao.com/link/map/${address}`;
  };

  return (
    <>
      <p className="py-[16px] text-body1-regular-lh-20 text-gray-scale-700">
        {parse(description)}
      </p>

      <div className="flex flex-col gap-[8px]">
        <h2 className="text-subtitle-semi text-gray-scale-700">팁 포인트</h2>
        <p className="rounded-[12px] bg-gray-scale-100 px-[18px] py-[20px] text-body1-regular-lh-20 text-gray-700">
          {tip}
        </p>
      </div>

      <hr className="bg-gray-scale-300" />

      <div className="flex w-full flex-col gap-[8px]">
        <h2 className="text-subtitle-semi text-gray-scale-700">위치</h2>
        <Link
          href={getRedirectLink()}
          target="_blank"
          rel="noreferrer noopener"
        >
          <StaticMap
            center={{
              lat: latitude,
              lng: longitude,
            }}
            style={{
              width: "100%",
              height: "165px",
              borderRadius: "10px",
            }}
            marker={{
              position: {
                lat: latitude,
                lng: longitude,
              },
            }}
            level={3}
          />
        </Link>
        <div className="flex items-center gap-[2px]">
          <PinLocationIcon width="20" height="20" className="text-primary-01" />
          <span className="max-w-[90%] truncate text-body1-medium text-gray-scale-500">
            {address}
          </span>
        </div>
      </div>
    </>
  );
};

export default Detail;
