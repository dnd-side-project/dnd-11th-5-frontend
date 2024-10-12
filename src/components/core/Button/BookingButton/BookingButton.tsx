import Link from "next/link";
import { FC, useMemo } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { cn } from "@/utils/cn";

import BasicButton from "../BasicButton/BasicButton";
import ScrabButton from "./ScrabButton";

interface Props {
  label?: string;
  className?: string;
  festival: DetailFestivalResponse;
}

const BookingButton: FC<Props> = ({
  className,
  label = "예매하기",
  festival,
}) => {
  const linkInfo = useMemo(() => {
    const { homepageUrl, ticketLink, instagramUrl } = festival;

    if (homepageUrl) {
      return {
        label: "홈페이지 바로가기",
        url: homepageUrl,
      };
    }
    if (ticketLink) {
      return {
        label: "예매링크 바로가기",
        url: ticketLink,
      };
    }
    if (instagramUrl) {
      return {
        label: "인스타그램 바로가기",
        url: instagramUrl,
      };
    }
    return {
      label: "정보가 없습니다.",
      url: "",
    };
  }, [festival]);

  return (
    <div
      className={cn(
        "fixed bottom-0 z-[10] h-[98px] w-full max-w-none lg:max-w-[450px] px-[24px]",
        "flex justify-between items-center gap-[11px]",
        "border-[1px] border-gray-scale-100",
        "bg-gray-scale-0",
        className,
      )}
    >
      <Link
        href={linkInfo.url}
        className="w-full"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BasicButton type="button" label={linkInfo.label} />
      </Link>
      <ScrabButton festival={festival} />
    </div>
  );
};

export default BookingButton;
