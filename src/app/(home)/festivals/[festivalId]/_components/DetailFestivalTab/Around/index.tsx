"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FC, useMemo, useState } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { BasicChip } from "@/components/core/Chip";
import { CATEGORIES } from "@/config/festivalDetailSetting";
import { useSwipingContainer } from "@/hooks/useSwipingContainer";
import { cn } from "@/utils";

import AroundPlaceTile from "./_components/AroundPlaceTile";

interface Props {
  festivals: DetailFestivalResponse;
}

const Around: FC<Props> = ({ festivals }) => {
  const placeService = useMemo(() => new kakao.maps.services.Places(), []);
  const [selectedKeyword, setSelectedKeyword] = useState(CATEGORIES[0]);
  const { containerRef, mouseDownHandler } = useSwipingContainer();

  const { data } = useQuery<kakao.maps.services.PlacesSearchResult>({
    queryKey: ["keyword", selectedKeyword.code],
    queryFn: () =>
      new Promise((resolve, reject) => {
        placeService.categorySearch(
          selectedKeyword.code,
          (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const closestPlace = result
                .sort((a, b) => Number(a.distance) - Number(b.distance))
                .slice(0, 6);

              resolve(closestPlace);
            } else {
              reject(new Error("Error fetching data"));
            }
          },
          {
            location: new kakao.maps.LatLng(
              festivals.latitude,
              festivals.longitude,
            ),
          },
        );
      }),
    staleTime: Infinity,
  });

  return (
    <section className="p-[16px]">
      {/* 주변 장소 카테고리 리스트 */}
      <div
        ref={containerRef}
        onMouseDown={mouseDownHandler}
        className="flex w-full gap-[8px] overflow-auto scrollbar-hide"
      >
        {CATEGORIES.map(({ category, code }) => (
          <BasicChip
            key={category}
            label={category}
            active={selectedKeyword.category === category}
            onClick={() => setSelectedKeyword({ category, code })}
            className={cn(
              "rounded-[8px] px-[8px] py-[10px]",
              selectedKeyword.category === category
                ? "text-gray-scale-900"
                : "text-gray-scale-300",
            )}
          />
        ))}
      </div>

      {/* 주변 장소 타일 리스트 */}
      <div className="flex flex-col gap-[16px] py-[16px]">
        {data?.length === 0 ? (
          <div className="flex h-[590px] w-full flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] border-gray-scale-200 bg-gray-scale-0">
            <Image
              src="/images/fallbackLogo.png"
              alt="around"
              width={76}
              height={76}
            />
            <span className="text-body2-medium text-gray-scale-600">
              주변 정보가 없어요 !
            </span>
          </div>
        ) : (
          data?.map((place) => <AroundPlaceTile key={place.id} place={place} />)
        )}
      </div>
    </section>
  );
};

export default Around;
