import { redirect } from "next/navigation";

import { getServerSideSession } from "@/apis/auth/auth";
import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
import BookingButton from "@/components/core/Button/BookingButton/BookingButton";
import { FestivalHeader } from "@/layout/Mobile/MobileHeader";

import DetailFestivalView from "./view";

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
  const session = await getServerSideSession();
  const festivalDetail = await getDetailFestival(params?.festivalId);

  return (
    <div className="mb-[110px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} session={session} />
      <BookingButton festival={festivalDetail} session={session} />
    </div>
  );
}
