import { FC } from "react";

import { AlarmIcon, CameraIcon, SearchIcon } from "../../../components/icons";

interface Props {}

const MobileHomeHeader: FC<Props> = ({}) => {
  return (
    <header className="flex h-[44px] w-full items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900">
      <button type="button" onClick={() => {}}>
        <CameraIcon width={24} height={24} />
      </button>

      <div className="flex items-center justify-center gap-[12px]">
        <button type="button" onClick={() => {}}>
          <SearchIcon width={24} height={24} className="text-gray-scale-900" />
        </button>
        <button type="button" onClick={() => {}}>
          <AlarmIcon width={24} height={24} className="text-gray-scale-0" />
        </button>
      </div>
    </header>
  );
};

export default MobileHomeHeader;
