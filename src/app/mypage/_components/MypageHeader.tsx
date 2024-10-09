import Link from "next/link";

import { SettingIcon } from "@/components/icons";

const MypageHeader = () => {
  return (
    <header className="flex h-[44px] w-full items-center justify-end px-[10px]">
      <Link href="/mypage/settings" prefetch>
        <SettingIcon
          width="24px"
          height="24px"
          className="text-gray-scale-900"
        />
      </Link>
    </header>
  );
};

export default MypageHeader;
