import { Metadata } from "next/types";

import { getReviewKeywords } from "@/apis/review/reviewKeywords/reviewKeywords";

import ReviewNewView from "./view";

export const metadata: Metadata = {
  title: "리뷰 작성하기",
};

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
