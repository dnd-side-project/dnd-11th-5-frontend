import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { ArrowLeftSmallIcon } from "@/components/icons";

interface Props extends LinkProps {
  label?: string;
  showBackButton?: boolean;
}

const DefaultHeader: FC<Props> = ({
  label = "",
  showBackButton = true,
  ...props
}) => {
  return (
    <header className="fixed top-0 flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      {showBackButton && (
        <Link {...props}>
          <ArrowLeftSmallIcon width={24} height={24} />
        </Link>
      )}

      <span className="max-w-[200px] truncate text-label-semi">{label}</span>
      <div className="size-[44px]" />
    </header>
  );
};

export default DefaultHeader;
