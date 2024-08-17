import { HostFestivalData } from "@/apis/festivals/hotFestival/hotFestivalType";
import { ThisWeekFestivalData } from "@/apis/festivals/thisweek/thisWeekFestivalType";

import FestivalHot from "./_components/FestivalHot";
import FestivalThisWeek from "./_components/FestivalThisWeek";

interface Props {
  hotFestivals: HostFestivalData;
  thisWeekFestivals: ThisWeekFestivalData;
}

const HomeView = ({ hotFestivals, thisWeekFestivals }: Props) => {
  return (
    <main className="flex flex-wrap gap-4 px-[16px]">
      <FestivalHot hotFestivals={hotFestivals} />
      <FestivalThisWeek thisWeekFestivals={thisWeekFestivals} />
    </main>
  );
};

export default HomeView;
