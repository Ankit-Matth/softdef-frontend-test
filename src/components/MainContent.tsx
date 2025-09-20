import React from 'react'
import Badge from './TopBadge'
import { FilterPanel } from './FilterPanel'
import { Pagination } from './Pagination'
import ProductCard from './ProductCard'
import type { Product } from "@/app/page";

interface MainContentProps {
  displayedProducts: Product[];
  filteredProducts: Product[];
  selectedSortBy: string;
  setSelectedSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedSortOrder: string;
  setSelectedSortOrder: React.Dispatch<React.SetStateAction<string>>;
  selectedItemsPerPage: number;
  setSelectedItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
}

const MainContent: React.FC<MainContentProps> = ({
  displayedProducts,
  filteredProducts,
  selectedSortBy,
  setSelectedSortBy,
  selectedSortOrder,
  setSelectedSortOrder,
  selectedItemsPerPage,
  setSelectedItemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  return (
    <div className='flex flex-col w-full px-3.5 pt-5 text-center bg-white'>
      <Badge />
      <FilterPanel 
        filteredProducts={filteredProducts}
        selectedSortBy={selectedSortBy} 
        setSelectedSortBy={setSelectedSortBy}
        selectedSortOrder={selectedSortOrder} 
        setSelectedSortOrder={setSelectedSortOrder}
        selectedItemsPerPage={selectedItemsPerPage}
        setSelectedItemsPerPage={setSelectedItemsPerPage}
      />
      
      <ProductCard displayedProducts={displayedProducts} />

      <Pagination 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        totalItems={totalItems} 
        itemsPerPage={itemsPerPage}
      />
    </div>
  )
}

export default MainContent;
