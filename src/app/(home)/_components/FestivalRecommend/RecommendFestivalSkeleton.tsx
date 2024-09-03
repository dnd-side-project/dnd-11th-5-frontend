const RecommendFestivalSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex h-auto max-h-[425px] w-full flex-col px-[24px] py-[35px]">
        <div className="flex items-end justify-between pr-[36px]">
          <div className="flex flex-col gap-[4px] pb-[16px]">
            <div className="h-[30px] w-[150px] rounded-md bg-gray-scale-200" />
            <div className="h-[30px] w-[150px] rounded-md bg-gray-scale-200" />
          </div>
          <div className="size-[80px] rounded-full bg-gray-scale-200" />
        </div>

        <div className="h-[289px] w-full rounded-[16px] bg-gray-scale-200"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default RecommendFestivalSkeleton;
