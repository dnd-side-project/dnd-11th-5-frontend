import { getTopReviews } from "@/apis/review/topReviews/topReviews";
import { ReviewTile } from "@/components/core/List";

const TopReviews = async () => {
  const topReviews = await getTopReviews();
  return (
    <section className="flex w-full flex-col gap-[12px]">
      <div className="flex w-full justify-between">
        <div className="flex gap-[4px] text-title-bold text-gray-scale-900">
          실시간 핫한 후기
        </div>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        {topReviews.map((review) => (
          <ReviewTile key={review.reviewId} review={review} />
        ))}
      </div>
    </section>
  );
};

export default TopReviews;
