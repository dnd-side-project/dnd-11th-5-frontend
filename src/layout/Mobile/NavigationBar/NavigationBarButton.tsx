"use client";

import * as NM from "@radix-ui/react-navigation-menu";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

import { cn } from "@/utils";

const NavigationBarButton = ({
  href,
  disabled = false,
  ...props
}: LinkProps & { children: ReactNode; disabled?: boolean }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
    <NM.Link
      asChild
      active={isActive}
      className={cn("flex flex-col", disabled && "cursor-not-allowed")}
      aria-disabled={disabled}
    >
      <NextLink
        href={href}
        prefetch
        className={`flex flex-col items-center justify-center gap-[3px] ${isActive ? "text-gray-scale-900" : "text-gray-scale-400"}`}
        onClick={handleClick}
        {...props}
      />
    </NM.Link>
  );
};

export default NavigationBarButton;
