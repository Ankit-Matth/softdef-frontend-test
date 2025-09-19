import React from 'react';

export const Pagination = () => {
  const currentPage = 3;

  return (
    <div className="flex justify-center items-center bg-[#f6f7f8] rounded gap-6 mb-8 mt-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          className={`w-16 h-16 flex items-center justify-center rounded-xs ${
            num === currentPage
              ? 'bg-[#3db8fd] text-white'
              : 'text-black'
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};
