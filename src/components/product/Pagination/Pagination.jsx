import React from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Pagination = ({
  page = 1,
  totalPages = 1,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;

    onPageChange(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getVisiblePages = () => {
    const pages = [];

    // Mobile
    if (window.innerWidth < 640) {
      if (page > 1) pages.push(page - 1);

      pages.push(page);

      if (page < totalPages) pages.push(page + 1);

      return pages;
    }

    // Desktop
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-2 mt-10">
      {/* First */}
      <button
        onClick={() => changePage(1)}
        disabled={page === 1}
        className="w-9 h-9 border border-slate-300 rounded-xl text-slate-700 text-sm font-medium shrink-0 inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronsLeft size={18} />
      </button>

      {/* Previous */}
      <button
        onClick={() => changePage(page - 1)}
        disabled={page === 1}
        className="w-9 h-9 border border-slate-300 rounded-xl text-slate-700 text-sm font-medium shrink-0 inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {getVisiblePages().map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="text-gray-500 px-2"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => changePage(item)}
            className={`
              w-9 h-9 border rounded-xl text-slate-700 text-sm font-medium shrink-0 inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300
              ${
                page === item
                  ? "bg-slate-800 border-slate-800 text-white"
                  : "bg-white border-slate-300 hover:bg-gray-100"
              }
            `}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => changePage(page + 1)}
        disabled={page === totalPages}
        className="w-9 h-9 border border-slate-300 rounded-xl text-slate-700 text-sm font-medium shrink-0 inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronRight size={18} />
      </button>

      {/* Last */}
      <button
        onClick={() => changePage(totalPages)}
        disabled={page === totalPages}
        className="w-9 h-9 border border-slate-300 rounded-xl text-slate-700 text-sm font-medium shrink-0 inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronsRight size={18} />
      </button>
    </div>
  )
}

export default Pagination