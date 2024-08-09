import { FC } from "react";

import { ArrowLeftSmallIcon, ShareIcon } from "@/components/icons";

interface Props {
  onPrev?: () => void;
  onClick?: () => void;
}

const FestivalHeader: FC<Props> = ({ onPrev, onClick }) => {
  return (
    <header className="fixed top-0 flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      <button type="button" onClick={onPrev}>
        <ArrowLeftSmallIcon width={24} height={24} />
      </button>

      <div className="size-[44px]" />

      <button type="button" onClick={onClick}>
        <ShareIcon width={24} height={24} />
      </button>
    </header>
  );
};

export default FestivalHeader;
