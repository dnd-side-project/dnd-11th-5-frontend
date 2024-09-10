import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";

import { getFestivalTopKeywords } from "@/apis/festivals/topKeywordFestival/topKeywordFestival";
import { topKeywordFestivalKeys } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalKeys";

import TopKeywordsTile from "./TopKeywordsTile";

interface Props {
  festivalId: number;
}

const TopKeywords: FC<Props> = ({ festivalId }) => {
  const { data } = useSuspenseQuery({
    queryKey: topKeywordFestivalKeys.list({ festivalId }),
    queryFn: () => getFestivalTopKeywords({ festivalId }),
  });

  if (data.keywords.length === 0 || !data) {
    return (
      <div className="mt-[72px] flex h-[140px] w-full flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] border-gray-scale-200 bg-gray-scale-0">
        <Image
          src="/images/fallbackLogo.png"
          alt="service"
          width={76}
          height={76}
        />
        <span className="text-body2-medium text-gray-scale-600">
          아직 선택된 키워드가 없어요 !
        </span>
      </div>
    );
  }

  return (
    <article className="mt-[72px]">
      <div className="flex w-full flex-col rounded-[12px]">
        <h1>가장 많이 선택된 키워드</h1>
        {data.keywords.map((keyword) => (
          <TopKeywordsTile
            key={keyword.keywordId}
            keyword={keyword}
            percentage={10}
          />
        ))}
      </div>
    </article>
  );
};

export default TopKeywords;
