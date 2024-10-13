import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

import {
  DetailCategory,
  DetailChat,
  DetailInfo,
  DetailTitle,
} from "./_components";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailFestivalInfoPanel: FC<Props> = ({ festivals }) => {
  return (
    <section className="flex w-full flex-col gap-[16px] rounded-t-[20px] bg-gray-scale-0 px-[16px] py-[32px]">
      <DetailTitle festivals={festivals} />

      <DetailCategory festivals={festivals} />

      <DetailInfo festivals={festivals} />

      <DetailChat festivals={festivals} />
    </section>
  );
};

export default DetailFestivalInfoPanel;
