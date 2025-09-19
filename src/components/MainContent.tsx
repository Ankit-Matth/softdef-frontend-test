import React from 'react'
import Badge from './TopBadge'
import { FilterPanel } from './FilterPanel'
import { Pagination } from './Pagination'
import ProductCard from './ProductCard'

export default function MainContent () {
  return (
    <div className='flex flex-col w-full px-3.5 pt-5 text-center bg-white'>
      <Badge />
      <FilterPanel />
      <ProductCard />
      <Pagination />
    </div>
  )
}
