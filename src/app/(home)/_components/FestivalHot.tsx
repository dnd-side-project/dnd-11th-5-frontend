import { ArrowRightSmallIcon } from "@/components/icons";

const FestivalHot = async () => {
  return (
    <section className="w-full ">
      <div className="flex w-full justify-between">
        <div className="flex gap-[4px]">
          <span className="text-title-bold text-primary-01">HOT</span>
          <span className="text-title-bold text-gray-scale-900">페스티벌</span>
        </div>

        <ArrowRightSmallIcon
          width={24}
          height={24}
          className="text-gray-scale-900"
        />
      </div>

      {/* <TrendFestivalCard /> */}
    </section>
  );
};

export default FestivalHot;
