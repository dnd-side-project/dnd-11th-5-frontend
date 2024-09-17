"use client";

import { FC, useEffect, useMemo, useState } from "react";

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
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>(
    [],
  );
  const [selectedKeyword, setSelectedKeyword] = useState(CATEGORIES[0]);
  const { containerRef, mouseDownHandler } = useSwipingContainer();

  const callback = (result: kakao.maps.services.PlacesSearchResult) => {
    const closestPlace = result
      .sort((a, b) => Number(a.distance) - Number(b.distance))
      .slice(0, 6);

    setPlaces(closestPlace);
  };

  useEffect(() => {
    if (!selectedKeyword) {
      return;
    }

    placeService.categorySearch(selectedKeyword.code, callback, {
      location: new kakao.maps.LatLng(festivals.latitude, festivals.longitude),
    });
  }, [selectedKeyword]);

  return (
    <section className="p-[16px]">
      {/* 주변 장소 카테고리 리스트 */}
      <div
        ref={containerRef}
        onMouseDown={mouseDownHandler}
        className="flex w-full gap-[8px] overflow-auto"
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
        {places.map((place) => (
          <AroundPlaceTile key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
};

export default Around;
