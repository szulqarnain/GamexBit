import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  class1?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  class1,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: number[] = [];
    const visiblePages = 2;
    const half = Math.floor(visiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, visiblePages);
    } else if (currentPage + half > totalPages) {
      start = Math.max(1, totalPages - visiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="w-full flex justify-center md:mt-[35px] my-[20px]">
      <div className="flex gap-[3px]">
        {/* Prev */}
        <button
          className="w-[40px] h-[40px] flex items-center justify-center border border-[rgb(var(--border))] rounded-[8px] text-[rgb(var(--primary-text))] mr-[8px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BsChevronLeft />
        </button>

        {/* First page + dots */}
        {pageNumbers[0] > 1 && (
          <>
            <button
              className="w-[40px] h-[40px] border border-[rgb(var(--border))] rounded-[8px] text-[rgb(var(--primary-text))] cursor-pointer"
              onClick={() => goToPage(1)}
            >
              1
            </button>
            <span className="w-[40px] h-[40px] flex items-center justify-center text-[rgb(var(--primary-text))]">
              ...
            </span>
          </>
        )}

        {/* Main visible pages */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-[40px] h-[40px] border border-[rgb(var(--border))] rounded-[8px] cursor-pointer ${
              currentPage === page
                ? `${
                    class1 || "bg-[rgb(var(--border))]"
                  } text-[rgb(var(--primary-text))]`
                : "text-[rgb(var(--primary-text))]"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Dots + last page */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            <span className="w-[40px] h-[40px] flex items-center justify-center text-[rgb(var(--primary-text))]">
              ...
            </span>
            <button
              className="w-[40px] h-[40px] border border-[rgb(var(--border))] rounded-[8px] text-[rgb(var(--primary-text))] cursor-pointer"
              onClick={() => goToPage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next */}
        <button
          className="w-[40px] h-[40px] flex items-center justify-center border border-[rgb(var(--border))] rounded-[8px] text-[rgb(var(--primary-text))] ml-[8px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
