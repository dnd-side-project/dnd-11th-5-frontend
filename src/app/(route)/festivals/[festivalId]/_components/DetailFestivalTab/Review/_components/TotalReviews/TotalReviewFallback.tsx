import Image from "next/image";

const TotalReviewFallback = () => {
  return (
    <div className="mt-[24px] flex h-[140px] w-full flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] border-gray-scale-200 bg-gray-scale-0">
      <Image
        src="/images/fallbackLogo.png"
        alt="service"
        width={76}
        height={76}
      />
      <span className="text-body2-medium text-gray-scale-600">
        아직 작성된 리뷰가 없어요 !
      </span>
    </div>
  );
};

export default TotalReviewFallback;
