import ky from "ky";
import { Metadata, ResolvingMetadata } from "next/types";

import { FestivalResponse } from "@/apis/festival";
import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
import BookingButton from "@/components/core/Button/BookingButton/BookingButton";
import { REVALIDATE_DURATION } from "@/config";
import { FestivalHeader } from "@/layout/Mobile/MobileHeader";

import DetailFestivalView from "./view";

type Props = {
  params: { festivalId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamicParams = true;
export const revalidate = REVALIDATE_DURATION.DAY;

export async function generateStaticParams() {
  try {
    const festivalIds = await ky
      .get("https://odiga.shop/api/v1/festivals/id")
      .json<FestivalResponse<string[]>>()
      .then((res) => res.data);

    return festivalIds.map((id: string) => ({ festivalId: String(id) }));
  } catch (error) {
    console.error("Failed to fetch festival IDs:", error);
    return [];
  }
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const festivalId = params.festivalId;
  const festivalDetail = await getDetailFestival(festivalId);

  return {
    title: `${festivalDetail.name} | 피에스타`,
    description: festivalDetail.description,
    openGraph: {
      title: `${festivalDetail.name} | 피에스타`,
      description: festivalDetail.description,
      type: "article",
      locale: "ko_KR",
      siteName: "피에스타",
      images: [
        {
          url: festivalDetail.images[0].imageUrl,
          alt: `${festivalDetail.name} - Image`,
          width: 1200,
          height: 630,
        },
      ],
      url: `https://www.odiga.kr/festivals/${params.festivalId}`,
    },
  };
}

export default async function Home(props: {
  params: Promise<{ festivalId: string }>;
}) {
  const params = await props.params;
  const festivalDetail = await getDetailFestival(params.festivalId);

  return (
    <div className="mb-[110px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} />
      <BookingButton festival={festivalDetail} />
    </div>
  );
}
