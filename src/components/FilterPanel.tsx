import React from 'react';
import { Grip, Menu } from 'lucide-react';

export const FilterPanel = () => {
  return (
    <div className="flex items-center justify-between bg-[#F1F3F4] mt-4 rounded">
      <div className="flex items-center space-x-17 px-6 py-3.5">
        <span className="text-sm text-gray-700">13 Items</span>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800">Sort By</span>
          <select
            className="text-sm border border-gray-200 rounded pl-3 pr-6 py-1 focus:outline-none"
            aria-label="Sort By"
          >
            <option value="name">Name</option>
            <option value="date">Date</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Show</span>
          <select
            className="text-sm border border-gray-200 rounded pl-5 pr-10  py-1 focus:outline-none"
            aria-label="Items per page"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-1 pr-2">
        <button
          className="flex items-center justify-center rounded hover:bg-gray-200 w-12 h-12"
          aria-label="Grid View"
        >
          <Grip size={26} className="text-blue-500" />
        </button>
        <button
          className="flex items-center justify-center rounded hover:bg-gray-200 w-12 h-12"
          aria-label="List View"
        >
          <Menu size={26} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};
