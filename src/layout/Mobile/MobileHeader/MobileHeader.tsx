import React, { FC } from "react";

import { ArrowLeftSmallIcon } from "../../../components/icons";

interface Props {
  label?: string;
  onClick?: () => void;
  showBackButton?: boolean;
}

const MobileHeader: FC<Props> = ({ label, onClick, showBackButton = true }) => {
  return (
    <header className="fixed top-0 flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      {showBackButton && (
        <button type="button" onClick={onClick}>
          <ArrowLeftSmallIcon width={24} height={24} />
        </button>
      )}

      <span className="max-w-[200px] truncate text-label-semi">{label}</span>
      <div className="size-[44px]" />
    </header>
  );
};

export default MobileHeader;
