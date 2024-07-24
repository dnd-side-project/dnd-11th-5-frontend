import * as NM from "@radix-ui/react-navigation-menu";

import NavLink from "./MobileBottomNavLink";

const navigations = [
  { name: "홈", slug: "/" },
  { name: "캘린더", slug: "/calendar" },
  { name: "지도", slug: "/map" },
  { name: "채팅", slug: "/chat" },
  { name: "내정보", slug: "/mypage" },
];

const MobileBottomNavBar = () => {
  return (
    <NM.Root className="items-between fixed bottom-0 flex min-h-btm-nav-bar w-full max-w-screen-m-lg flex-col justify-center bg-slate-400 px-4">
      <NM.List className="flex h-full w-full items-center justify-between">
        {navigations.map((nav) => (
          <NM.Item key={nav.name}>
            <NavLink href={nav.slug}>{nav.name}</NavLink>
          </NM.Item>
        ))}
      </NM.List>
    </NM.Root>
  );
};

export default MobileBottomNavBar;
