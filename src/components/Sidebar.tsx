"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, PanelRightOpen } from "lucide-react";
import { Product } from "@/app/page";

interface SpecialOfferOption {
  type: string;
  count: number;
}

interface ColorOption {
  id: string;
  color: string;
}

interface BrandOption {
  name: string;
  count: number;
}

interface CategoryOption {
  name: string;
  count: number;
  highlighted?: boolean;
}

interface SidebarProps {
  allProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedBrand: string;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedSpecialOffer: string;
  setSelectedSpecialOffer: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: [number, number];
  setSelectedPrice: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  allProducts,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedColor,
  setSelectedColor,
  selectedSpecialOffer,
  setSelectedSpecialOffer,
  selectedPrice,
  setSelectedPrice,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    specialOffers: true,
    prices: true,
    colors: true,
    brands: true,
    categories: true,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSpecialOfferToggle = (offerType: string) => {
    if (selectedSpecialOffer === offerType) {
      setSelectedSpecialOffer(""); 
    } else {
      setSelectedSpecialOffer(offerType);
    }
  };

  const handleCategoryToggle = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const handleBrandToggle = (brandName: string) => {
    if (selectedBrand === brandName) {
      setSelectedBrand("");
    } else {
      setSelectedBrand(brandName);
    }
  };

  const handleColorToggle = (colorId: string) => {
    if (selectedColor === colorId) {
      setSelectedColor("");
    } else {
      setSelectedColor(colorId); 
    }
  };

const offerCounts = allProducts.reduce(
  (acc, product) => {
    if (product.offerType) {
      acc[product.offerType] = (acc[product.offerType] || 0) + 1;
    }
    return acc;
  },
  {} as Record<string, number>
);

const brandCounts = allProducts.reduce(
  (acc, product) => {
    if (product.name) {
      const brand = product.name.split(" ")[0];
      acc[brand] = (acc[brand] || 0) + 1;
    }
    return acc;
  },
  {} as Record<string, number>
);


const categoryCounts = allProducts.reduce(
  (acc, product) => {
    if (product.category) {
      acc[product.category] = (acc[product.category] || 0) + 1;
    }
    return acc;
  },
  {} as Record<string, number>
);


  const colorOptions: ColorOption[] = [
    { id: "blue", color: "#006CFF" },
    { id: "red", color: "#FC3E39" },
    { id: "black", color: "#171717" },
    { id: "yellow", color: "#FFF600" },
    { id: "pink", color: "#FF00B4" },
    { id: "wheat", color: "#EFDFDF" },
  ];

 const specialOffers: SpecialOfferOption[] = [
  { type: "Hot Deals", count: offerCounts["Hot Deals"] || 0 },
  { type: "Mega Discount", count: offerCounts["Mega Discount"] || 0 },
  { type: "Flash Sales", count: offerCounts["Flash Sales"] || 0 },
];

const brandOptions: BrandOption[] = Object.entries(brandCounts).map(
  ([brand, count]) => ({ name: brand, count })
);


const categoryOptions: CategoryOption[] = Object.entries(categoryCounts).map(
  ([category, count]) => ({ name: category, count })
);


  const padToSix = <T,>(arr: T[], placeholder: T): T[] => {
    if (arr.length >= 6) return arr;
    return [...arr, ...Array(6 - arr.length).fill(placeholder)];
  };

  const MIN_PRICE = 0;
  const MAX_PRICE = 36;

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    const currentMax = selectedPrice[1];
    if (newMin <= currentMax) {
      setSelectedPrice([newMin, currentMax]);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    const currentMin = selectedPrice[0];
    if (newMax >= currentMin) {
      setSelectedPrice([currentMin, newMax]);
    }
  };

  return (
    <>
      <button
        className="md:hidden fixed top-20 left-5 z-50 p-2 bg-blue-500 text-white rounded-md shadow-md"
        onClick={handleToggleDrawer}
      >
        <PanelRightOpen />
      </button>

      {drawerOpen && <div className="md:hidden fixed inset-0 bg-black/50 bg-opacity-30 z-40" onClick={handleToggleDrawer}></div>}

      <aside
        className={`
          fixed top-0 left-0 h-full w-[16rem] md:w-[20rem] lg:w-[30rem] pt-2 bg-white z-50 transform transition-transform duration-300 ease-in-out
          sm:static sm:translate-x-0
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col
        `}
      >
        <div className="md:hidden flex justify-end p-4 border-b border-gray-200">
          <button
            className="p-2 bg-blue-500 text-white rounded-md shadow-md"
            onClick={handleToggleDrawer}
          >
            <PanelRightOpen />
          </button>
        </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div className="bg-[#f6f7f8] rounded p-5">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleSection("specialOffers")}
                aria-expanded={openSections.specialOffers}
              >
                <h2 className="text-sm lg:text-lg font-semibold">Special Offers</h2>
                {openSections.specialOffers ? <ChevronUp className="hover:cursor-pointer" /> : <ChevronDown className="hover:cursor-pointer" />}
              </button>
              {openSections.specialOffers && (
                <div className="mt-4 space-y-3">
                  {padToSix(specialOffers, { type: "Placeholder", count: 0 }).map(
                    (deal, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center text-xs md:text-sm cursor-pointer transition-colors ${
                          selectedSpecialOffer === deal.type
                            ? "bg-blue-100 rounded-md px-2 py-1 border border-blue-200"
                            : "hover:bg-gray-50 rounded-md px-2 py-1"
                        }`}
                        onClick={() =>
                          deal.count > 0 && handleSpecialOfferToggle(deal.type)
                        }
                      >
                        <span
                          className={
                            deal.count === 0 
                              ? "text-gray-400 italic" 
                              : selectedSpecialOffer === deal.type
                              ? "text-blue-700 font-medium"
                              : "text-gray-700"
                          }
                        >
                          {deal.type}
                        </span>
                        <span
                          className={
                            deal.count === 0 
                              ? "text-gray-400" 
                              : selectedSpecialOffer === deal.type
                              ? "text-blue-600 font-medium"
                              : "text-gray-500"
                          }
                        >
                          {deal.count || "-"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="bg-[#f6f7f8] rounded p-5">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleSection("prices")}
                aria-expanded={openSections.prices}
              >
                <h2 className="text-sm lg:text-lg font-semibold">Prices</h2>
                {openSections.prices ? <ChevronUp className="hover:cursor-pointer" /> : <ChevronDown className="hover:cursor-pointer" />}
              </button>

              {openSections.prices && (
                <div className="mt-4">
                  <div className="flex flex-row justify-between lg:mr-14 text-xs lg:text-sm text-gray-700 mb-4">
                    <p>Range:</p>
                    <p>${selectedPrice[0]} – ${selectedPrice[1]}</p>
                  </div>

                  <div className="relative">
                    <div className="h-2 bg-gray-200 rounded-full relative">
                      <div
                        className="absolute h-2 bg-blue-500 rounded-full"
                        style={{
                          left: `${((selectedPrice[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                          right: `${100 - ((selectedPrice[1] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                        }}
                      />
                    </div>

                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={selectedPrice[0]}
                      onChange={handleMinPriceChange}
                      className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-10
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-4 
                        [&::-webkit-slider-thumb]:w-4 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-blue-600 
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:pointer-events-auto
                        [&::-webkit-slider-thumb]:border-2
                        [&::-webkit-slider-thumb]:border-white
                        [&::-webkit-slider-thumb]:shadow-md
                        [&::-moz-range-thumb]:appearance-none 
                        [&::-moz-range-thumb]:h-4 
                        [&::-moz-range-thumb]:w-4 
                        [&::-moz-range-thumb]:rounded-full 
                        [&::-moz-range-thumb]:bg-blue-600 
                        [&::-moz-range-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:border-2
                        [&::-moz-range-thumb]:border-white
                        [&::-moz-range-thumb]:shadow-md"
                      style={{ top: '0px' }}
                    />

                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={selectedPrice[1]}
                      onChange={handleMaxPriceChange}
                      className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-20
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-4 
                        [&::-webkit-slider-thumb]:w-4 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-blue-600 
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:pointer-events-auto
                        [&::-webkit-slider-thumb]:border-2
                        [&::-webkit-slider-thumb]:border-white
                        [&::-webkit-slider-thumb]:shadow-md
                        [&::-moz-range-thumb]:appearance-none 
                        [&::-moz-range-thumb]:h-4 
                        [&::-moz-range-thumb]:w-4 
                        [&::-moz-range-thumb]:rounded-full 
                        [&::-moz-range-thumb]:bg-blue-600 
                        [&::-moz-range-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:border-2
                        [&::-moz-range-thumb]:border-white
                        [&::-moz-range-thumb]:shadow-md"
                      style={{ top: '0px' }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#f6f7f8] rounded p-5">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleSection("colors")}
                aria-expanded={openSections.colors}
              >
                <h2 className="text-sm lg:text-lg font-semibold">Colors</h2>
                {openSections.colors ? <ChevronUp className="hover:cursor-pointer" /> : <ChevronDown className="hover:cursor-pointer" />}
              </button>
              {openSections.colors && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {padToSix(colorOptions, { id: "placeholder", color: "#e5e7eb" }).map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 lg:w-6 lg:h-6 rounded-full border cursor-pointer transition-all ${
                          selectedColor === color.id 
                            ? "ring-2 ring-blue-500 border-blue-300 scale-110" 
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: color.color }}
                        onClick={() =>
                          color.id !== "placeholder" && handleColorToggle(color.id)
                        }
                      />
                    )
                  )}
                </div>
              )}
            </div>

            <div className="bg-[#f6f7f8] rounded p-5">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleSection("brands")}
                aria-expanded={openSections.brands}
              >
                <h2 className="text-sm lg:text-lg font-semibold">Brands</h2>
                {openSections.brands ? <ChevronUp className="hover:cursor-pointer" /> : <ChevronDown className="hover:cursor-pointer" />}
              </button>
              {openSections.brands && (
                <div className="mt-4 space-y-3">
                  {padToSix(brandOptions, { name: "Placeholder", count: 0 }).map(
                    (brand, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center text-xs md:text-sm cursor-pointer transition-colors ${
                          selectedBrand === brand.name
                            ? "bg-blue-100 rounded-md px-2 py-1 border border-blue-200"
                            : "hover:bg-gray-50 rounded-md px-2 py-1"
                        }`}
                        onClick={() => brand.count > 0 && handleBrandToggle(brand.name)}
                      >
                        <span
                          className={
                            brand.count === 0
                              ? "text-gray-400 italic"
                              : selectedBrand === brand.name
                              ? "text-blue-700 font-medium"
                              : "text-gray-700"
                          }
                        >
                          {brand.name}
                        </span>
                        <span
                          className={
                            brand.count === 0 
                              ? "text-gray-400" 
                              : selectedBrand === brand.name
                              ? "text-blue-600 font-medium"
                              : "text-gray-500"
                          }
                        >
                          {brand.count || "-"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="bg-[#f6f7f8] rounded p-5">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleSection("categories")}
                aria-expanded={openSections.categories}
              >
                <h2 className="text-sm lg:text-lg font-semibold">Categories</h2>
                {openSections.categories ? <ChevronUp className="hover:cursor-pointer" /> : <ChevronDown className="hover:cursor-pointer" />}
              </button>
              {openSections.categories && (
                <div className="mt-4 space-y-3">
                  {padToSix(categoryOptions, { name: "Placeholder", count: 0 }).map(
                    (category, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center text-xs md:text-sm cursor-pointer transition-colors ${
                          selectedCategory === category.name
                            ? "bg-blue-100 rounded-md px-2 py-1 border border-blue-200"
                            : "hover:bg-gray-50 rounded-md px-2 py-1"
                        }`}
                        onClick={() =>
                          category.count > 0 && handleCategoryToggle(category.name)
                        }
                      >
                        <span
                          className={
                            category.count === 0
                              ? "text-gray-400 italic"
                              : selectedCategory === category.name
                              ? "text-blue-700 font-medium"
                              : category.highlighted
                              ? "text-blue-500 font-medium"
                              : "text-gray-700"
                          }
                        >
                          {category.name}
                        </span>
                        <span
                          className={
                            category.count === 0
                              ? "text-gray-400"
                              : selectedCategory === category.name
                              ? "text-blue-600 font-medium"
                              : category.highlighted
                              ? "text-blue-500 font-medium"
                              : "text-gray-500"
                          }
                        >
                          {category.count || "-"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="bg-[#f6f7f8] rounded px-5 py-4 text-center">
              <h2 className="text-sm lg:text-lg font-semibold">More</h2>
            </div>
            </div>
      </aside>
    
    </>
  );
};

export default Sidebar;