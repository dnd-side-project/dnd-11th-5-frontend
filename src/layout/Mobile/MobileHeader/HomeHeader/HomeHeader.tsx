import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { SearchIcon } from "@/components/icons";

interface Props {}

const HomeHeader: FC<Props> = ({}) => {
  return (
    <header className="fixed top-0 flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[16px] text-gray-900 lg:max-w-[450px]">
      <Link href="/">
        <Image
          width={84}
          height={30}
          src="/images/fiestaLogo.png"
          alt="fiesta-logo"
        />
      </Link>

      <div className="flex items-center justify-center gap-[12px]">
        <Link href="/search">
          <SearchIcon width={24} height={24} className="text-gray-scale-900" />
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
