import React, { useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center items-center bg-[#f6f7f8] rounded gap-6 mb-8 mt-1">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <div
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`w-16 h-16 flex items-center justify-center rounded-xs cursor-pointer ${
            num === currentPage ? 'bg-[#3db8fd] text-white' : 'text-black'
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};
