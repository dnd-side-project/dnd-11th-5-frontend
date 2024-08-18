import { ThisWeekFestivalData } from "@/apis/festivals/thisweek/thisWeekFestivalType";
import { FestivalTile } from "@/components/core/List";
import { DateTag } from "@/components/core/Tag";
import { getDday } from "@/lib/dayjs";

interface Props {
  festivals: ThisWeekFestivalData;
}

const ThisWeekFestivalView = ({ festivals }: Props) => {
  return (
    <div className="h-full w-full p-[16px]">
      <div className="flex w-full flex-col gap-[10px]">
        {festivals.content.map((festival) => (
          <FestivalTile
            key={festival.name}
            href={`/featival/${festival.festivalId}`}
            festival={festival}
          >
            <DateTag label={getDday(festival.startDate, festival.endDate)} />
          </FestivalTile>
        ))}
      </div>
    </div>
  );
};

export default ThisWeekFestivalView;
