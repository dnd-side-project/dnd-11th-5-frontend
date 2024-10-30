const AroundSkeleton = () => {
  return (
    <div role="status" className="flex w-full animate-pulse flex-col gap-4">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-[68px] w-full rounded-[10px] border-[1px] border-gray-scale-200 bg-gray-scale-0"
        />
      ))}
    </div>
  );
};

export default AroundSkeleton;
