"use client"
import React, { useState } from 'react';

interface ColorOption {
  id: string;
  color: string;
  selected?: boolean;
}

interface BrandOption {
  name: string;
  count: number;
  highlighted?: boolean;
}

interface HotDeal {
  brand: string;
  count: number;
  highlighted?: boolean;
}

const Sidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);
  const [selectedColors, setSelectedColors] = useState<string[]>(['blue']);

  const hotDeals: HotDeal[] = [
    { brand: 'Nike', count: 2 },
    { brand: 'Airmax', count: 48, highlighted: true },
    { brand: 'Nike', count: 14 },
    { brand: 'Adidas', count: 15 },
    { brand: 'Vans', count: 23 },
    { brand: 'All Stars', count: 1 },
    { brand: 'Adidas', count: 95 }
  ];

  const colorOptions: ColorOption[] = [
    { id: 'blue', color: '#006CFF' },
    { id: 'red', color: '#FC3E39' },
    { id: 'black', color: '#171717' },
    { id: 'yellow', color: '#FFF600' },
    { id: 'pink', color: '#FF00B4' },
    { id: 'light-pink', color: '#EFDFDF' }
  ];

  const brandOptions: BrandOption[] = [
    { name: 'Nike', count: 99 },
    { name: 'Nike', count: 99, highlighted: true },
    { name: 'Adidas', count: 99 },
    { name: 'Siemens', count: 99 }
  ];

  const handleColorSelect = (colorId: string) => {
    setSelectedColors(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    );
  };

  return (
    <div className="w-1/3 pl-6 pr-0 pt-5 min-h-screen">
      <div className="mb-8 px-4 py-8 bg-[#f6f7f8]">
        <h2 className="text-lg font-semibold text-gray-900 mb-8">Hot Deals</h2>
        <div className="space-y-10">
          {hotDeals.map((deal, index) => (
            <div key={index} className="flex justify-between items-center">
              <span 
                className={`text-base ${deal.highlighted ? 'text-blue-500 font-medium' : 'text-gray-700'}`}
              >
                {deal.brand}
              </span>
              <span 
                className={`text-base ${deal.highlighted ? 'text-blue-500 font-medium' : 'text-gray-400'}`}
              >
                {deal.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 pl-6 py-8 pr-4 bg-[#f6f7f8]">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">PRICES</h2>
        <div className="mb-4">
          <div className="flex flex-row justify-between mb-4 mr-8">
            <span className="text-base text-gray-700">Ranger:</span>
            <span className="text-base text-gray-700">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full relative"
                style={{ width: '75%' }}
              >
                <div className="absolute -right-2 -top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                <div className="absolute -left-2 -top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 p-6 pb-9 bg-[#f6f7f8]">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">COLOR</h2>
        <div className="flex flex-row gap-4">
          {colorOptions.map((color) => (
            <div
              key={color.id}
              className={`flex items-center justify-center rounded-full w-7 h-7 p-0.5 ${
                selectedColors.includes(color.id)
                  ? "border border-blue-400"
                  : ""
              }`}
            >
              <button
                onClick={() => handleColorSelect(color.id)}
                className={`rounded-full transition-all duration-200 ${
                  selectedColors.includes(color.id)
                    ? "w-4 h-4"
                    : "w-6 h-6"
                }`}
                style={{ backgroundColor: color.color }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 px-6 py-7 bg-[#f6f7f8]">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">BRAND</h2>
        <div className="space-y-4">
          {brandOptions.map((brand, index) => (
            <div key={index} className="flex justify-between items-center">
              <span 
                className={`text-base ${brand.highlighted ? 'text-blue-500 font-medium' : 'text-gray-700'}`}
              >
                {brand.name}
              </span>
              <span 
                className={`text-base ${brand.highlighted ? 'text-blue-500 font-medium' : 'text-gray-400'}`}
              >
                {brand.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-4 bg-[#f6f7f8]">
        <h2 className="text-lg font-semibold text-gray-900">MORE</h2>
      </div>
    </div>
  );
};

export default Sidebar;