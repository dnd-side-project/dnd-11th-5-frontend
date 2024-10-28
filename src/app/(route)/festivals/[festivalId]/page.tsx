import ky from "ky";
import { Metadata } from "next/types";

import { FestivalResponse } from "@/apis/festival";
import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
import BookingButton from "@/components/core/Button/BookingButton/BookingButton";
import { REVALIDATE_DURATION } from "@/config";
import { FestivalHeader } from "@/layout/Mobile/MobileHeader";

import DetailFestivalView from "./view";

export const metadata: Metadata = {
  title: "축제",
};

export const dynamicParams = true;
export const revalidate = REVALIDATE_DURATION.DAY;

export async function generateStaticParams() {
  try {
    const festivalIds = await ky
      .get("https://odiga.shop/api/v1/festivals/id")
      .json<FestivalResponse<string[]>>()
      .then((res) => res.data);

    return festivalIds.map((id: string) => ({ festivalId: id }));
  } catch (error) {
    console.error("Failed to fetch festival IDs:", error);
    return [];
  }
}

export default async function Home(props: {
  params: Promise<{ festivalId: number }>;
}) {
  const params = await props.params;

  const festivalDetail = await getDetailFestival(String(params.festivalId));

  return (
    <div className="mb-[110px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} />
      <BookingButton festival={festivalDetail} />
    </div>
  );
}
