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
  { name: "홈", slug: "/", icon: <HomeIcon width={20} height={20} /> },
  {
    name: "캘린더",
    slug: "/calendar",
    icon: <CalendarCheckIcon width={20} height={20} />,
  },
  {
    name: "지역",
    slug: "/map",
    icon: <PinLocationIcon width={20} height={20} />,
  },
  {
    name: "채팅",
    slug: "/chat",
    icon: <ChatBubbleDotsIcon width={20} height={20} />,
  },
  { name: "MY", slug: "/mypage", icon: <UserIcon width={20} height={20} /> },
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
      <NM.List className="flex  h-full w-full  items-center justify-between ">
        {navigations.map((nav) => (
          <NM.Item
            key={nav.name}
            className="flex w-[36px] items-center justify-center text-caption1-medium-nav"
          >
            <NavigationBarButton href={nav.slug}>
              {nav.icon}
              {nav.name}
            </NavigationBarButton>
          </NM.Item>
        ))}
      </NM.List>
    </NM.Root>
  );
};

export default NavigationBar;
