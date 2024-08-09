const EmptyFestivalCard = () => {
  return (
    <div className="flex h-[204px] w-full items-center rounded-[8px] bg-gray-scale-0">
      <div className="flex w-full flex-col items-center justify-center gap-[16px]">
        <div className="size-[76px] rounded-full bg-primary-03" />
        <span className="text-body1-medium text-gray-scale-600">
          아직 예정된 페스티벌이 없어요!
        </span>
      </div>
    </div>
  );
};

export default EmptyFestivalCard;
