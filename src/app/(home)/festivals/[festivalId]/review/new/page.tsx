import { getReviewKeywords } from "@/apis/review/reviewKeywords/reviewKeywords";

import ReviewNewView from "./view";

export default async function ReviewNewPage({
  params,
}: {
  params: { festivalId: string };
}) {
  const keywords = await getReviewKeywords();

  return (
    <section className="mt-[44px]">
      <ReviewNewView keywords={keywords} festivalId={params.festivalId} />
    </section>
  );
}
