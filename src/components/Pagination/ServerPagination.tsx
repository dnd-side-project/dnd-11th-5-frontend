import Link from "next/link";

import { ArrowLeftSmallIcon, ArrowRightSmallIcon } from "@/components/icons";
import { serialize } from "@/lib/searchParams";
import { cn } from "@/utils";

const MAX_PAGE_COUNT = 3;
const DEFAULT_SIZE = 6;

type PaginationControlsProps = {
  currentPage: number;
  totalPage: number;
  currentPath: string;
  size?: number;
};

function Pagination({
  currentPage,
  currentPath,
  totalPage,
  size = DEFAULT_SIZE,
}: PaginationControlsProps) {
  const getPageNumbers = (): number[] => {
    if (totalPage < MAX_PAGE_COUNT) {
      return Array.from({ length: totalPage }, (_, index) => index + 1);
    }

    if (currentPage < MAX_PAGE_COUNT) {
      return Array.from({ length: MAX_PAGE_COUNT }, (_, index) => index + 1);
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pageURL = (page: number, size?: number) => {
    return serialize(currentPath, {
      page,
      size,
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 mb-[40px] flex w-full max-w-[450px] items-center justify-center gap-[16px]",
      )}
    >
      <Link
        href={pageURL(currentPage - 1, size)}
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
            href={pageURL(page - 1, size)}
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
        href={pageURL(currentPage + 1, size)}
        className={cn(
          "size-[32px] rounded-[8px] p-[8px] bg-gray-scale-100",
          "flex justify-center items-center",
          currentPage + 1 === totalPage ? "pointer-events-none opacity-50" : "",
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
