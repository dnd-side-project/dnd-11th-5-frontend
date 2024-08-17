import Link from "next/link";
import { FC } from "react";

import { HostFestivalData } from "@/apis/festivals/types/hotFestival";
import { TrendFestivalCard } from "@/components/core/Card";
import { ArrowRightSmallIcon } from "@/components/icons";
import { FIESTA_ENDPOINTS } from "@/config";

interface Props {
  hotFestivals: HostFestivalData;
}

const FestivalHot: FC<Props> = ({ hotFestivals }) => {
  return (
    <section className="flex w-full flex-col gap-[12px]">
      <div className="flex w-full justify-between">
        <div className="flex gap-[4px]">
          <span className="text-title-bold text-primary-01">HOT</span>
          <span className="text-title-bold text-gray-scale-900">페스티벌</span>
        </div>

        <Link href={`${FIESTA_ENDPOINTS.festivals.mostlike}?page=0&size=6`}>
          <ArrowRightSmallIcon
            width={24}
            height={24}
            className="text-gray-scale-900"
          />
        </Link>
      </div>

      <div className="flex w-full gap-[16px]">
        {hotFestivals.content.splice(0, 2).map((v) => (
          <TrendFestivalCard
            key={v.festivalId}
            href={`/featival/${v.festivalId}`}
            festival={v}
          />
        ))}
      </div>
    </section>
  );
};

export default FestivalHot;
