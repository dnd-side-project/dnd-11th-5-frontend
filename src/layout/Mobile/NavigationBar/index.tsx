import * as NM from "@radix-ui/react-navigation-menu";

import {
  CalendarCheckIcon,
  ChatBubbleDotsIcon,
  HomeIcon,
  PinLocationIcon,
  UserIcon,
} from "@/components/icons";
import { cn } from "@/utils/cn";

import NavigationBarButton from "./NavigationBarButton";

const navigations = [
  {
    name: "홈",
    slug: "/",
    icon: <HomeIcon width={20} height={20} />,
    disabled: false,
  },
  {
    name: "캘린더",
    slug: "/calendar",
    icon: <CalendarCheckIcon width={20} height={20} />,
    disabled: true,
  },
  {
    name: "지역",
    slug: "/map",
    icon: <PinLocationIcon width={20} height={20} />,
    disabled: true,
  },
  {
    name: "채팅",
    slug: "/chat",
    icon: <ChatBubbleDotsIcon width={20} height={20} />,
    disabled: true,
  },
  {
    name: "MY",
    slug: "/mypage",
    icon: <UserIcon width={20} height={20} />,
    disabled: false,
  },
];

const NavigationBar = () => {
  return (
    <NM.Root
      className={cn(
        "w-full h-[60px] px-[26px] py-[12px] rounded-t-[24px] max-w-none lg:max-w-[450px]",
        "fixed bottom-0 shadow-t-2xl",
        "bg-gray-scale-0",
      )}
    >
      <NM.List className="flex h-full w-full items-center justify-between">
        {navigations.map(({ name, slug, icon, disabled }) => (
          <NM.Item
            key={name}
            className={cn(
              `flex w-[36px] items-center justify-center text-caption1-medium-nav`,
            )}
          >
            <NavigationBarButton href={slug} disabled={disabled}>
              {icon}
              {name}
            </NavigationBarButton>
          </NM.Item>
        ))}
      </NM.List>
    </NM.Root>
  );
};

export default NavigationBar;
