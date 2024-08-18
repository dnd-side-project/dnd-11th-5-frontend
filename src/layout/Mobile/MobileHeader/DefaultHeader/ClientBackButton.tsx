import Link from "next/link";
import { FC } from "react";
import { UrlObject } from "url";

import { ArrowLeftSmallIcon } from "@/components/icons";

interface Props {
  href?: UrlObject | string;
  onClick?: () => void;
}

const ClientBackButton: FC<Props> = ({ href, onClick }) => {
  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        <ArrowLeftSmallIcon width={24} height={24} />
      </Link>
    );
  } else {
    return (
      <button onClick={onClick}>
        <ArrowLeftSmallIcon width={24} height={24} />
      </button>
    );
  }
};

export default ClientBackButton;
