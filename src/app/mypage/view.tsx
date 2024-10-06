"use client";

import { useUserStore } from "@/store/user";

import MypageAvatar from "./_components/MypageAvatar";
import MypageTab from "./_components/MypageTab";

const MyPageView = () => {
  const user = useUserStore((state) => state.user);

  return (
    <form className="flex flex-wrap gap-4 text-title-bold">
      <MypageAvatar user={user} />
      <MypageTab />
    </form>
  );
};

export default MyPageView;
