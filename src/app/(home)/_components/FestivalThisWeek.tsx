import Link from "next/link";
import { FC } from "react";

import { ThisWeekFestivalData } from "@/apis/festivals/thisweek/thisWeekFestivalType";
import { FestivalTile } from "@/components/core/List";
import { DateTag } from "@/components/core/Tag";
import { ArrowRightSmallIcon } from "@/components/icons";
import { FIESTA_ENDPOINTS } from "@/config";
import useDayjs from "@/hooks/useDayjs";

interface Props {
  thisWeekFestivals: ThisWeekFestivalData;
}

const FestivalThisWeek: FC<Props> = ({ thisWeekFestivals }) => {
  const { getDday } = useDayjs();
  return (
    <section className="flex w-full flex-col gap-[12px]">
      <div className="flex w-full justify-between">
        <div className="flex gap-[4px] text-title-bold text-gray-scale-900">
          이번주 페스티벌
        </div>

        <Link href={`${FIESTA_ENDPOINTS.festivals.thisWeek}?page=0&size=6`}>
          <ArrowRightSmallIcon
            width={24}
            height={24}
            className="text-gray-scale-900"
          />
        </Link>
      </div>

      <div className="flex w-full flex-col gap-[16px]">
        {thisWeekFestivals.content.splice(0, 3).map((festival) => (
          <FestivalTile
            key={festival.name}
            href={`/featival/${festival.festivalId}`}
            festival={festival}
          >
            <DateTag label={`D-${getDday(festival.startDate)}`} />
          </FestivalTile>
        ))}
      </div>
    </section>
  );
};

export default FestivalThisWeek;