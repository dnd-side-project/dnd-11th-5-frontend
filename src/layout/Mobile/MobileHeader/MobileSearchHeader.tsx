"use client";

import Link from "next/link";
import React, { FC } from "react";

import SearchInput from "@/components/core/Input/SearchInput";

import { ArrowLeftSmallIcon } from "../../../components/icons";

interface Props {}

const MobileSearchHeader: FC<Props> = ({}) => {
  return (
    <header className="fixed top-0 flex h-[60px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      <Link href="/" className="pr-[8px]">
        <ArrowLeftSmallIcon width={24} height={24} />
      </Link>

      <SearchInput onClick={() => {}} />
    </header>
  );
};

export default MobileSearchHeader;
