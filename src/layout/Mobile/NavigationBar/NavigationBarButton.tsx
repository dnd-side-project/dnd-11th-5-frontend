"use client";

import * as NM from "@radix-ui/react-navigation-menu";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({ href, ...props }: LinkProps & { children: ReactNode }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NM.Link asChild active={isActive} className="flex flex-col">
      <NextLink
        href={href}
        prefetch
        className={`flex flex-col items-center justify-center gap-[3px] ${isActive ? "text-gray-scale-900" : "text-gray-scale-400"}`}
        {...props}
      />
    </NM.Link>
  );
};

export default NavLink;
