"use-client"
import React from 'react';
import { Grip, Menu, ArrowDown, ArrowUp } from 'lucide-react';
import { Product } from '@/app/page';

interface FilterPanelProps {
  filteredProducts: Product[],
  selectedSortBy: string;
  setSelectedSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedSortOrder: string;
  setSelectedSortOrder: React.Dispatch<React.SetStateAction<string>>;
  selectedItemsPerPage: number;
  setSelectedItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filteredProducts,
  selectedSortBy,
  setSelectedSortBy,
  selectedSortOrder,
  setSelectedSortOrder,
  selectedItemsPerPage,
  setSelectedItemsPerPage,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#F1F3F4] mt-4 rounded">
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 px-4 md:px-6 py-3.5 w-full md:w-auto">
        <span className="text-sm text-gray-700">{filteredProducts.length} Items</span>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800">Sort By</span>
          <select
            value={selectedSortBy}
            onChange={(e) => setSelectedSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded pl-1 pr-2 lg:pl-3 lg:pr-6 py-0.5 lg:py-1 focus:outline-none"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>

          <button
            onClick={() =>
              setSelectedSortOrder(selectedSortOrder === "asc" ? "desc" : "asc")
            }
            className="px-2 py-1 border text-xs border-gray-300 text-gray-400 rounded hover:bg-gray-200 hover:cursor-pointer"
            aria-label="Toggle Sort Order"
          >
            {selectedSortOrder === "asc" ? <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5" /> : <ArrowUp className="w-4 h-4 lg:w-5 lg:h-5" />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Show</span>
          <select
            value={selectedItemsPerPage}
            onChange={(e) => setSelectedItemsPerPage(Number(e.target.value))}
            className="text-sm border border-gray-200 rounded pl-1 pr-2 lg:pl-3 lg:pr-6 py-0.5 lg:py-1 focus:outline-none"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-1 pr-2 w-full md:w-auto">
        <button
          className="flex items-center justify-center rounded hover:bg-gray-200 w-12 h-12"
          aria-label="Grid View"
        >
          <Grip className="text-blue-500 w-4 h-4 lg:w-6 lg:h-6" />
        </button>
        <button
          className="flex items-center justify-center rounded hover:bg-gray-200 w-12 h-12"
          aria-label="List View"
        >
          <Menu className="w-4 h-4 lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
};
