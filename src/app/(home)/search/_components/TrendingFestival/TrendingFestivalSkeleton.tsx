const TrendingFestivalSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex h-full w-full flex-col gap-[16px]">
        <div className="h-[19px] w-[150px] rounded-md bg-gray-scale-200" />

        <ul className="flex w-full flex-col bg-gray-scale-50 p-[12px]">
          {Array.from({ length: 5 }, (_, idx) => (
            <li
              key={idx}
              className="flex h-auto w-full items-center gap-[12px] rounded-[8px] py-[16px]"
            >
              <div className="h-[17px] w-full rounded-md bg-gray-300"></div>
            </li>
          ))}
        </ul>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TrendingFestivalSkeleton;
