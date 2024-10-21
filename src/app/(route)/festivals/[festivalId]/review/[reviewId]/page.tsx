import { Metadata } from "next/types";

import ReviewEditView from "./view";

export const metadata: Metadata = {
  title: "리뷰 수정",
};

export default async function ReviewEditPage({
  params,
}: {
  params: { festivalId: string; reviewId: string };
}) {
  return (
    <section className="mt-[44px]">
      <ReviewEditView
        festivalId={params.festivalId}
        reviewId={params.reviewId}
      />
    </section>
  );
}
