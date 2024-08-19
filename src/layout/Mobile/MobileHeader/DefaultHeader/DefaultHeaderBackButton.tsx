import Link from "next/link";
import { FC } from "react";
import { UrlObject } from "url";

import { IconButton } from "@/components/core/Button";
import { ArrowLeftSmallIcon } from "@/components/icons";

interface Props {
  href?: UrlObject | string;
  onClick?: () => void;
}

const DefaultHeaderBackButton: FC<Props> = ({ href, onClick }) => {
  if (onClick) {
    return (
      <IconButton onClick={onClick}>
        <ArrowLeftSmallIcon
          width={24}
          height={24}
          className="text-gray-scale-900"
        />
      </IconButton>
    );
  }

  return (
    <Link href={href ?? "/"} onClick={onClick}>
      <ArrowLeftSmallIcon width={24} height={24} />
    </Link>
  );
};

export default DefaultHeaderBackButton;
