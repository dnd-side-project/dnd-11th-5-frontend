import * as Avatar from "@radix-ui/react-avatar";
import type { User } from "next-auth";
import { FC } from "react";

import { UserTypeImage } from "@/utils";

interface Props {
  user: User | null;
}

const MypageAvatar: FC<Props> = ({ user }) => {
  if (!user) {
    return (
      <div
        role="status"
        className="flex h-[132px] w-full animate-pulse flex-col items-center justify-center gap-[2px]"
      >
        <div className="size-[64px] rounded-full bg-gray-scale-200" />
        <div className="h-[24px] w-[104px]  bg-gray-scale-200" />
        <div className="h-[17px] w-[170px]  bg-gray-scale-200" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex h-[132px] w-full flex-col items-center justify-center">
      <Avatar.Root className="min-h-[76px]">
        <Avatar.Image
          width={76}
          height={76}
          src={UserTypeImage[user?.userTypeId]}
          alt={user?.nickname ?? "피에스타"}
        />
        <Avatar.Fallback id="AvatarFallback">
          <Avatar.Image
            width={76}
            height={76}
            src={"/images/fiestaLogo.png"}
            alt={"fallback"}
          />
        </Avatar.Fallback>
      </Avatar.Root>
      <span className="text-title-bold text-gray-scale-800">
        {user.nickname}
      </span>
      <span className="text-body1-regular text-gray-scale-500">
        {user.statusMessage}
      </span>
    </div>
  );
};

export default MypageAvatar;
