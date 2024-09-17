import { ArrowLeftSmallIcon, ArrowRightSmallIcon } from "@/components/icons";
import { cn } from "@/utils";

const MAX_PAGE_COUNT = 3;

type PaginationControlsProps = {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
  size?: number;
};

function ClientPagination({
  currentPage,
  totalPage,
  onChange,
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

  return (
    <div
      className={cn(
        "flex w-full max-w-[450px] items-center justify-center gap-[16px] mt-4",
      )}
    >
      <button
        onClick={() => onChange(currentPage - 1)}
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
      </button>

      <div className="flex gap-[16px]">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onChange(page - 1)}
            className={cn(
              "size-[32px] rounded-[8px] p-[8px] bg-gray-scale-100",
              "flex justify-center items-center",
              currentPage + 1 === page
                ? "bg-gray-scale-700 text-gray-scale-0"
                : "bg-gray-scale-100 text-gray-scale-400",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage + 1 === totalPage}
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
      </button>
    </div>
  );
}

export default ClientPagination;
