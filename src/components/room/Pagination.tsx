import { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

// Define props for the Pagination component
interface PaginationProps {
  currentPage: number;  // Current active page number
  totalPage: number;    // Total number of pages
  onPageChange: (page: number) => void;  // Callback function to handle page change
}

function Pagination({ currentPage, totalPage, onPageChange }: PaginationProps) {
  // Memoize page numbers to avoid recalculating on every render
  const pageNumbers = useMemo(() => {
    const firstPage = Math.max(1, Math.min(currentPage, totalPage - 4));
    const lastPage = Math.min(currentPage + 4, totalPage);
    return [...Array(lastPage - firstPage + 1).keys()].map(
      (key) => key + firstPage
    );
  }, [currentPage, totalPage]);

  return (
    <div className="py-2 px-9 flex items-center gap-x-2.5">
      {/* Previous page button */}
      <div
        className="pl-4 flex items-center cursor-pointer select-none"
        onClick={() => {
          // Navigate to the previous page if not on the first page
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
      >
        <span className="w-6 h-6 flex items-center justify-center">
          <FaChevronLeft /> {/* Icon for previous page */}
        </span>
        <p>Förre</p> {/* Text label for previous page */}
      </div>
      {/* Page number buttons */}
      <div className="flex gap-x-2.5">
        {pageNumbers.map((page) => (
          <span
            key={page}
            className={twMerge(
              "w-6 h-6 items-center text-center cursor-pointer",
              page === currentPage
                ? "rounded-full text-white bg-primary-background" // Highlight the current page
                : ""
            )}
            onClick={() => onPageChange(page)}  // Change page on click
          >
            {page}
          </span>
        ))}
      </div>
      {/* Next page button */}
      <div
        className="pr-4 flex items-center cursor-pointer select-none"
        onClick={() => {
          // Navigate to the next page if not on the last page
          if (currentPage < totalPage) onPageChange(currentPage + 1);
        }}
      >
        <p>Nästa</p> {/* Text label for next page */}
        <span className="w-6 h-6 flex items-center justify-center">
          <FaChevronRight /> {/* Icon for next page */}
        </span>
      </div>
    </div>
  );
}

export default Pagination;
