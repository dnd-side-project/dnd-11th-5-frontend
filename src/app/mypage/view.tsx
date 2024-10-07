"use client";

import { FC } from "react";

import { BadgesResponse } from "@/apis/user/badges/badgesType";
import { useUserStore } from "@/store/user";

import MypageAvatar from "./_components/MypageAvatar";
import MypageTab from "./_components/MypageTab";

interface Props {
  badges: BadgesResponse;
}

const MyPageView: FC<Props> = ({ badges }) => {
  const user = useUserStore((state) => state.user);

  return (
    <form className="flex flex-wrap gap-4 text-title-bold">
      <MypageAvatar user={user} />
      <MypageTab badges={badges} />
    </form>
  );
};

export default MyPageView;
