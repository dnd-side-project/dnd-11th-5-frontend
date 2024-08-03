import React, { FC } from "react";

import { ArrowLeftSmallIcon } from "../../../components/icons";

interface Props {
  label: string;
  onClick?: () => void;
}

const MobileHeader: FC<Props> = ({ label, onClick }) => {
  return (
    <header className="flex h-[44px] w-full items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900">
      <button type="button" onClick={onClick}>
        <ArrowLeftSmallIcon width={24} height={24} />
      </button>

      <span className="max-w-[200px] truncate text-label-semi">{label}</span>
      <div className="size-[44px]" />
    </header>
  );
};

export default MobileHeader;
