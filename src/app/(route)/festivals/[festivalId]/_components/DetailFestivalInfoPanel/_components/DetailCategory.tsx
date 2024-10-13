import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { BasicChip } from "@/components/core/Chip";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailCategory: FC<Props> = ({ festivals }) => {
  return (
    <div className="flex w-full gap-[6px]">
      {festivals.categories.map((category) => (
        <BasicChip key={category.categoryId} label={category.name} />
      ))}
    </div>
  );
};

export default DetailCategory;
