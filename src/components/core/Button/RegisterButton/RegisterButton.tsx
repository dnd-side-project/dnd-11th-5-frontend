import Link, { LinkProps } from "next/link";
import { FC, ReactElement } from "react";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props extends Pick<LinkProps, "href"> {
  label: string;
  icon?: ReactElement;
  className?: string;
}

const RegistorButton: FC<Props> = ({ label, icon, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-full duration-300 rounded-[6px] py-[8px] px-[12px]",
        "flex items-center justify-center gap-[6px]",
        " text-primary-01 bg-primary-05",
        className,
      )}
    >
      {icon ? icon : <PlusIcon width={16} height={16} />}
      <div className="w-[90%] truncate text-button2-medium">{label}</div>
    </Link>
  );
};

export default RegistorButton;
