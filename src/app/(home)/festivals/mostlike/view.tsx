import { HostFestivalData } from "@/apis/festivals/hotFestival/hotFestivalType";
import { TrendFestivalCard } from "@/components/core/Card";

interface Props {
  festivals: HostFestivalData;
}

const TrendTestView = ({ festivals }: Props) => {
  return (
    <div className="h-full w-full p-[16px]">
      <div className="grid w-full grid-cols-2 gap-[16px]">
        {festivals.content.map((festival) => (
          <TrendFestivalCard
            key={festival.festivalId}
            href={`/featival/${festival.festivalId}`}
            festival={festival}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendTestView;
