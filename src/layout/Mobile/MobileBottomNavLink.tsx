"use client";

import * as NM from "@radix-ui/react-navigation-menu";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  ...props
}: LinkProps & { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NM.Link asChild active={isActive}>
      <NextLink
        href={href}
        prefetch
        className={` ${isActive ? "text-red-600" : ""}`}
        {...props}
      />
    </NM.Link>
  );
};

export default NavLink;
