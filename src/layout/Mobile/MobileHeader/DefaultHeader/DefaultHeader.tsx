import { FC } from "react";
import { UrlObject } from "url";

import ClientBackButton from "./DefaultHeaderBackButton";

interface Props {
  label?: string;
  showBackButton?: boolean;
  href?: UrlObject | string;
  onClick?: () => void;
}

const DefaultHeader: FC<Props> = ({
  label = "",
  showBackButton = true,
  href,
  onClick,
}) => {
  return (
    <header className="fixed top-0 z-[10] flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      {showBackButton ? (
        <ClientBackButton href={href} onClick={onClick} />
      ) : (
        <div className="size-[44px]" />
      )}

      <span className="max-w-[200px] truncate text-label-semi">{label}</span>
      <div className="size-[44px]" />
    </header>
  );
};

export default DefaultHeader;
