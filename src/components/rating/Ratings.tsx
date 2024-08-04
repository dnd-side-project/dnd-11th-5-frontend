import React, { FC } from "react";

import { StarIcon } from "../icons";

interface Props {
  rating: number;
}

const Ratings: FC<Props> = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars: React.JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    if (roundedRating >= i) {
      stars.push(
        <StarIcon
          key={i}
          width="12px"
          height="12px"
          className="text-primary-01"
        />,
      );
    } else if (roundedRating >= i - 0.5) {
      // TODO: 반쪽 별로 아이콘 교체 필요
      stars.push(
        <StarIcon
          key={i}
          width="12px"
          height="12px"
          className="text-primary-02"
        />,
      );
    } else {
      stars.push(
        <StarIcon
          key={i}
          width="12px"
          height="12px"
          className="text-primary-04"
        />,
      );
    }
  }

  return <div className="flex gap-[2px]">{stars}</div>;
};

export default Ratings;
