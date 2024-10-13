const MypageBookmarkSkeleton = () => {
  return (
    <div role="status" className="flex animate-pulse flex-col gap-[18px]">
      <div className="h-[18px] w-[200px] rounded-md bg-gray-scale-200" />
      <div className="grid w-full grid-cols-2 gap-y-[24px]">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="h-[196px] w-[200px] rounded-md bg-gray-scale-200"
          />
        ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MypageBookmarkSkeleton;
