import Link from "next/link";

import { ArrowLeftSmallIcon, ArrowRightSmallIcon } from "@/components/icons";
import { FIESTA_ENDPOINTS } from "@/config";
import { serialize } from "@/lib/searchParams";
import { cn } from "@/utils";

type PaginationControlsProps = {
  currentPage: number;
};

function Pagination({ currentPage }: PaginationControlsProps) {
  const getPageNumbers = (): number[] => {
    if (currentPage <= 1) {
      return [1, 2, 3];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pageURL = (page: number) => {
    return serialize(FIESTA_ENDPOINTS.festivals.mostlike, {
      page,
      size: 6,
    });
  };

  return (
    <div className="fixed bottom-0 mb-[40px] flex w-full max-w-[450px] items-center justify-center gap-[16px]">
      <Link
        href={pageURL(currentPage - 1)}
        className={cn(
          "size-[32px] rounded-[8px] p-[8px] bg-gray-scale-100",
          "flex justify-center items-center",
          currentPage === 0 ? "pointer-events-none opacity-50" : "",
        )}
      >
        <ArrowLeftSmallIcon
          width={24}
          height={24}
          className={"text-gray-scale-400"}
        />
      </Link>

      <div className="flex gap-[16px]">
        {getPageNumbers().map((page) => (
          <Link
            key={page}
            href={pageURL(page - 1)}
            className={cn(
              "size-[32px] rounded-[8px] p-[8px] bg-gray-scale-100",
              "flex justify-center items-center",
              currentPage === page - 1
                ? "bg-gray-scale-700 text-gray-scale-0"
                : "bg-gray-scale-100 text-gray-scale-400",
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={pageURL(currentPage + 1)}
        className={cn(
          "size-[32px] rounded-[8px] p-[8px] bg-gray-scale-100",
          "flex justify-center items-center",
          currentPage + 1 === 8 ? "pointer-events-none opacity-50" : "",
        )}
      >
        <ArrowRightSmallIcon
          width={24}
          height={24}
          className="text-gray-scale-400"
        />
      </Link>
    </div>
  );
}

export default Pagination;
