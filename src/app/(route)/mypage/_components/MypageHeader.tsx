"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import { LogoutIcon, SettingIcon } from "@/components/icons";

const MypageHeader = () => {
  return (
    <header className="flex h-[44px] w-full items-center justify-end gap-[16px] px-[10px]">
      <Link href="/mypage/settings" prefetch>
        <SettingIcon
          width="24px"
          height="24px"
          className="text-gray-scale-900"
        />
      </Link>
      <button type="button" onClick={() => signOut()}>
        <LogoutIcon
          width="28px"
          height="28px"
          className="text-gray-scale-800"
        />
      </button>
    </header>
  );
};

export default MypageHeader;
