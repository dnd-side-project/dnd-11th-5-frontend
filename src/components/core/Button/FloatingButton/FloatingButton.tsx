import Link from "next/link";

import { getServerSideSession } from "@/apis/auth/auth";
import { PencilIcon } from "@/components/icons";

const FloatingButton = async () => {
  const session = await getServerSideSession();

  if (!session) {
    return null;
  }

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
