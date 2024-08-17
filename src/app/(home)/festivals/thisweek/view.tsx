import { ThisWeekFestivalData } from "@/apis/festivals/thisweek/thisWeekFestivalType";
import { FestivalTile } from "@/components/core/List";
import { DateTag } from "@/components/core/Tag";
import useDayjs from "@/hooks/useDayjs";

interface Props {
  festivals: ThisWeekFestivalData;
}

const ThisWeekFestivalView = ({ festivals }: Props) => {
  const { getDday } = useDayjs();
  return (
    <div className="h-full w-full p-[16px]">
      <div className="flex w-full flex-col gap-[10px]">
        {festivals.content.map((festival) => (
          <FestivalTile
            key={festival.name}
            href={`/featival/${festival.festivalId}`}
            festival={festival}
          >
            <DateTag label={`D-${getDday(festival.startDate)}`} />
          </FestivalTile>
        ))}
      </div>
    </div>
  );
};

export default ThisWeekFestivalView;
