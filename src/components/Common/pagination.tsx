import React from "react";

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
  class1
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const visiblePages = 5;
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
    <div className="w-full flex justify-center mt-6">
      <div className="flex gap-[3px]">
        {/* Prev */}
        <button
          className="w-[40px] h-[40px] border border-[#E5E5E5] rounded-[8px] text-[#8E8E8E] mr-[8px]"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {/* First page + dots */}
        {pageNumbers[0] > 1 && (
          <>
            <button
              className="w-[40px] h-[40px] border border-[#E5E5E5] rounded-[8px] text-[#8E8E8E]"
              onClick={() => goToPage(1)}
            >
              1
            </button>
            <span className="w-[40px] h-[40px] flex items-center justify-center text-[#8E8E8E]">
              ...
            </span>
          </>
        )}

        {/* Main visible pages */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-[40px] h-[40px] border border-[#E5E5E5] rounded-[8px] ${
              currentPage === page ? `${class1 || ""} text-black` : "text-[#8E8E8E]"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Dots + last page */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            <span className="w-[40px] h-[40px] flex items-center justify-center text-[#8E8E8E]">
              ...
            </span>
            <button
              className="w-[40px] h-[40px] border border-[#E5E5E5] rounded-[8px] text-[#8E8E8E]"
              onClick={() => goToPage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next */}
        <button
          className="w-[40px] h-[40px] border border-[#E5E5E5] rounded-[8px] text-[#8E8E8E] ml-[8px]"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
