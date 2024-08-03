import Link from "next/link";
import React, { FC } from "react";

import SearchInput from "@/components/common/Input/SearchInput";

import { ArrowLeftSmallIcon } from "../../../components/icons";

interface Props {}

const MobileSearchHeader: FC<Props> = ({}) => {
  return (
    <header className="flex h-[60px] w-full items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900">
      <Link href="/" className="pr-[8px]">
        <ArrowLeftSmallIcon width={24} height={24} />
      </Link>

      <SearchInput onClick={() => {}} />
    </header>
  );
};

export default MobileSearchHeader;
