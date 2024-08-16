import { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPage, onPageChange }: PaginationProps) {
  const pageNumbers = useMemo(() => {
    const firstPage = Math.max(1, Math.min(currentPage, totalPage - 4));
    const lastPage = Math.min(currentPage + 4, totalPage);
    return [...Array(lastPage - firstPage + 1).keys()].map(
      (key) => key + firstPage
    );
  }, [currentPage, totalPage]);

  return (
    <div className="py-2 px-9 flex items-center gap-x-2.5">
      <div
        className="pl-4 flex items-center cursor-pointer"
        onClick={() => {
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
      >
        <span className="w-6 h-6 flex items-center justify-center">
          <FaChevronLeft />
        </span>
        <p>Förre</p>
      </div>
      <div className="flex gap-x-2.5">
        {pageNumbers.map((page) => (
          <span
            key={page}
            className={twMerge(
              "w-6 h-6 items-center text-center cursor-pointer",
              page === currentPage
                ? "rounded-full text-white bg-primary-background"
                : ""
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>
      <div
        className="pr-4 flex items-center cursor-pointer"
        onClick={() => {
          if (currentPage < totalPage) onPageChange(currentPage + 1);
        }}
      >
        <p>Nästa</p>
        <span className="w-6 h-6 flex items-center justify-center">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}

export default Pagination;
