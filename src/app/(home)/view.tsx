import { HostFestivalData } from "@/apis/festivals/hotFestival/hotFestivalType";

import FestivalHot from "./_components/FestivalHot";

interface Props {
  hotFestivals: HostFestivalData;
}

const HomeView = ({ hotFestivals }: Props) => {
  return (
    <main className="flex flex-wrap gap-4 px-[16px]">
      <FestivalHot hotFestivals={hotFestivals} />
    </main>
  );
};

export default HomeView;
