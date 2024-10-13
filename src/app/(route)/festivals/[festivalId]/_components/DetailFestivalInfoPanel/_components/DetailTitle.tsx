import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailTitle: FC<Props> = ({ festivals }) => {
  const { name, address, sido, sigungu } = festivals;
  return (
    <>
      <div className="flex w-full flex-col gap-[4px]">
        <span className="text-subtitle-medium text-gray-scale-700">{`${sido} ${sigungu}`}</span>
        <span className="text-title-bold text-gray-scale-700">{name}</span>
        <span className="text-body1-regular text-gray-scale-500">
          {address}
        </span>
      </div>
    </>
  );
};

export default DetailTitle;
