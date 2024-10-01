import { getReviewKeywords } from "@/apis/review/reviewKeywords/reviewKeywords";

import ReviewEditView from "./view";

export default async function ReviewEditPage({
  params,
}: {
  params: { festivalId: string; reviewId: string };
}) {
  const keywords = await getReviewKeywords();

  return (
    <section className="mt-[44px]">
      <ReviewEditView
        keywords={keywords}
        festivalId={params.festivalId}
        reviewId={params.reviewId}
      />
    </section>
  );
}
