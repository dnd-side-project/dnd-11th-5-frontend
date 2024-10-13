import { redirect } from "next/navigation";
import { Metadata } from "next/types";

import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
import BookingButton from "@/components/core/Button/BookingButton/BookingButton";
import { FestivalHeader } from "@/layout/Mobile/MobileHeader";

import DetailFestivalView from "./view";

export const metadata: Metadata = {
  title: "축제",
};
interface SearchParams {
  [key: string]: string | undefined;
}

export default async function Home({
  params,
}: {
  params: SearchParams & { festivalId?: string };
}) {
  if (!params.festivalId) {
    redirect("/");
  }
  const festivalDetail = await getDetailFestival(params?.festivalId);

  return (
    <div className="mb-[110px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} />
      <BookingButton festival={festivalDetail} />
    </div>
  );
}
