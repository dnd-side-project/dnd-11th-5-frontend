import Link from "next/link";
import { FC } from "react";
import { UrlObject } from "url";

import { ArrowLeftSmallIcon } from "@/components/icons";

interface Props {
  label?: string;
  showBackButton?: boolean;
  href: UrlObject | string;
}

const DefaultHeader: FC<Props> = ({
  label = "",
  showBackButton = true,
  href,
}) => {
  return (
    <header className="fixed top-0 z-[999] flex h-[44px] w-full max-w-none items-center justify-between px-[10px] text-gray-900 lg:max-w-[450px]">
      {showBackButton && (
        <Link href={href}>
          <ArrowLeftSmallIcon width={24} height={24} />
        </Link>
      )}

      <span className="max-w-[200px] truncate text-label-semi">{label}</span>
      <div className="size-[44px]" />
    </header>
  );
};

export default DefaultHeader;
