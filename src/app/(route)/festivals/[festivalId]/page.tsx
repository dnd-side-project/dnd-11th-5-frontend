import { Metadata } from "next/types";

import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
import BookingButton from "@/components/core/Button/BookingButton/BookingButton";
import { FestivalHeader } from "@/layout/Mobile/MobileHeader";

import DetailFestivalView from "./view";

// export const dynamicParams = true;

// export async function generateStaticParams() {
//   return [{ festivalId: "50" }, { festivalId: "51" }, { festivalId: "52" }];
// }

export const metadata: Metadata = {
  title: "축제",
};

export default async function Home({
  params,
}: {
  params: { festivalId: string };
}) {
  const festivalDetail = await getDetailFestival(params?.festivalId);

  return (
    <div className="mb-[110px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} />
      <BookingButton festival={festivalDetail} />
    </div>
  );
}
