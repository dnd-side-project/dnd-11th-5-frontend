import { redirect } from "next/navigation";

import { getDetailFestival } from "@/apis/festivals/detailFestival/detailFestival";
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

  const festivalDetail = await getDetailFestival(params?.festivalId);

  return (
    <div className="mb-[60px]">
      <FestivalHeader />
      <DetailFestivalView festivals={festivalDetail} />
    </div>
  );
}
