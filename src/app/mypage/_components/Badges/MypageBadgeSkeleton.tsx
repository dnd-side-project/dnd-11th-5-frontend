const RecommendFestivalSkeleton = () => {
  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex w-full items-center justify-center">
        <span className="h-[48px] w-[135px] rounded-md bg-gray-scale-200 "></span>
      </div>

      <div className="grid grid-cols-3 justify-between gap-[24px]">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="flex h-[134px] w-[123px] rounded-md bg-gray-scale-200"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendFestivalSkeleton;
