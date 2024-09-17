import Link from "next/link";
import { FC } from "react";

interface Props {
  place: kakao.maps.services.PlacesSearchResultItem;
}

const AroundPlaceTile: FC<Props> = ({ place }) => {
  const { place_name, address_name, place_url, distance } = place;
  return (
    <Link href={place_url} target="_blank" rel="noreferrer noopener">
      <div className="flex w-full items-end justify-between rounded-[12px] border-[1px] border-gray-scale-300 px-[24px] py-[12px]">
        <div className="flex flex-col gap-[8px]">
          <span className="text-body2-semi text-gray-700">{place_name}</span>
          <span className="text-body2-medium text-gray-500">
            {address_name}
          </span>
        </div>
        <div className="h-full w-auto text-body2-regular text-gray-400">
          {`${distance}m`}
        </div>
      </div>
    </Link>
  );
};

export default AroundPlaceTile;
