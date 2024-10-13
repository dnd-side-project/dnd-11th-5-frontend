import Link from "next/link";

import { PencilIcon } from "@/components/icons";

const FloatingButton = () => {
  return (
    <Link
      href="/festivals/new"
      className="fixed bottom-[76px] right-[16px] h-auto w-auto rounded-full bg-primary-01 p-[8px]"
    >
      <PencilIcon width={32} height={32} className="text-gray-scale-0" />
    </Link>
  );
};

export default FloatingButton;
