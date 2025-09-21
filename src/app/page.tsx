"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPercent: number;
  discountPrice: number;
  ratingValue: number;
  ratingCount: number;
  offerType: string;
  colors: string[];
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Puma Street Runner",
    price: 21.4,
    discountPercent: 15,
    discountPrice: 18.19,
    ratingValue: 4.1,
    ratingCount: 89,
    offerType: "Flash Sales",
    colors: ["black", "red"],
    category: "Shoes",
    imageUrl: "/products/shoe-bottom.png",
  },
  {
    id: 2,
    name: "Nike Flex Bag",
    price: 17.2,
    discountPercent: 22,
    discountPrice: 13.42,
    ratingValue: 3.6,
    ratingCount: 77,
    offerType: "Hot Deals",
    colors: ["blue"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
  {
    id: 3,
    name: "Adidas Ultra Kick",
    price: 25.5,
    discountPercent: 18,
    discountPrice: 20.91,
    ratingValue: 4.7,
    ratingCount: 142,
    offerType: "Mega Discount",
    colors: ["yellow", "wheat", "black"],
    category: "Shoes",
    imageUrl: "/products/shoe-left.png",
  },
  {
    id: 4,
    name: "Siemens Compact Pack",
    price: 19.8,
    discountPercent: 12,
    discountPrice: 17.42,
    ratingValue: 3.9,
    ratingCount: 64,
    offerType: "Flash Sales",
    colors: ["pink", "blue"],
    category: "Bags",
    imageUrl: "/products/bag-horizontal.png",
  },
  {
    id: 5,
    name: "Puma Slide X",
    price: 14.6,
    discountPercent: 25,
    discountPrice: 10.95,
    ratingValue: 3.5,
    ratingCount: 58,
    offerType: "Mega Discount",
    colors: ["red"],
    category: "Shoes",
    imageUrl: "/products/shoe-back.png",
  },
  {
    id: 6,
    name: "Nike Jet Pack",
    price: 23.7,
    discountPercent: 20,
    discountPrice: 18.96,
    ratingValue: 4.3,
    ratingCount: 134,
    offerType: "Hot Deals",
    colors: ["black", "yellow"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
  {
    id: 7,
    name: "Adidas Power Slide",
    price: 16.9,
    discountPercent: 10,
    discountPrice: 15.21,
    ratingValue: 3.8,
    ratingCount: 71,
    offerType: "Flash Sales",
    colors: ["blue", "wheat"],
    category: "Shoes",
    imageUrl: "/products/shoe-right.png",
  },
  {
    id: 8,
    name: "Siemens Daily Bag",
    price: 20.1,
    discountPercent: 15,
    discountPrice: 17.09,
    ratingValue: 4.0,
    ratingCount: 98,
    offerType: "Mega Discount",
    colors: ["black", "pink", "yellow"],
    category: "Bags",
    imageUrl: "/products/bag-horizontal.png",
  },
  {
    id: 9,
    name: "Nike Fast Sprint",
    price: 18.6,
    discountPercent: 12,
    discountPrice: 16.37,
    ratingValue: 3.7,
    ratingCount: 80,
    offerType: "Hot Deals",
    colors: ["red", "blue"],
    category: "Shoes",
    imageUrl: "/products/shoe-bottom.png",
  },
  {
    id: 10,
    name: "Puma Travel Kit",
    price: 24.8,
    discountPercent: 25,
    discountPrice: 18.6,
    ratingValue: 4.6,
    ratingCount: 151,
    offerType: "Flash Sales",
    colors: ["yellow"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
  {
    id: 11,
    name: "Adidas Prime Shoes",
    price: 27.0,
    discountPercent: 18,
    discountPrice: 22.14,
    ratingValue: 4.9,
    ratingCount: 160,
    offerType: "Mega Discount",
    colors: ["black", "wheat", "pink"],
    category: "Shoes",
    imageUrl: "/products/shoe-left.png",
  },
  {
    id: 12,
    name: "Siemens Flex Pro",
    price: 13.8,
    discountPercent: 10,
    discountPrice: 12.42,
    ratingValue: 3.4,
    ratingCount: 50,
    offerType: "Hot Deals",
    colors: ["blue"],
    category: "Shoes",
    imageUrl: "/products/shoe-right.png",
  },
  {
    id: 13,
    name: "Nike Carry-On Bag",
    price: 22.3,
    discountPercent: 20,
    discountPrice: 17.84,
    ratingValue: 4.2,
    ratingCount: 117,
    offerType: "Flash Sales",
    colors: ["red", "black"],
    category: "Bags",
    imageUrl: "/products/bag-horizontal.png",
  },
  {
    id: 14,
    name: "Puma Max Zoom",
    price: 19.5,
    discountPercent: 15,
    discountPrice: 16.57,
    ratingValue: 4.1,
    ratingCount: 95,
    offerType: "Mega Discount",
    colors: ["blue", "yellow"],
    category: "Shoes",
    imageUrl: "/products/shoe-back.png",
  },
  {
    id: 15,
    name: "Adidas City Bag",
    price: 25.6,
    discountPercent: 22,
    discountPrice: 19.97,
    ratingValue: 4.4,
    ratingCount: 121,
    offerType: "Hot Deals",
    colors: ["pink", "wheat"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
  {
    id: 16,
    name: "Siemens Grip Pro",
    price: 15.9,
    discountPercent: 18,
    discountPrice: 13.04,
    ratingValue: 3.6,
    ratingCount: 69,
    offerType: "Flash Sales",
    colors: ["yellow"],
    category: "Shoes",
    imageUrl: "/products/shoe-left.png",
  },
  {
    id: 17,
    name: "Nike Daily Flex",
    price: 20.9,
    discountPercent: 25,
    discountPrice: 15.67,
    ratingValue: 4.3,
    ratingCount: 126,
    offerType: "Mega Discount",
    colors: ["black", "red"],
    category: "Shoes",
    imageUrl: "/products/shoe-right.png",
  },
  {
    id: 18,
    name: "Puma Jet Travel",
    price: 26.2,
    discountPercent: 12,
    discountPrice: 23.06,
    ratingValue: 4.7,
    ratingCount: 153,
    offerType: "Hot Deals",
    colors: ["blue", "pink"],
    category: "Bags",
    imageUrl: "/products/bag-horizontal.png",
  },
  {
    id: 19,
    name: "Adidas Swift Walk",
    price: 12.9,
    discountPercent: 15,
    discountPrice: 10.96,
    ratingValue: 3.5,
    ratingCount: 59,
    offerType: "Mega Discount",
    colors: ["red", "yellow", "wheat"],
    category: "Shoes",
    imageUrl: "/products/shoe-back.png",
  },
  {
    id: 20,
    name: "Siemens Urban Bag",
    price: 23.4,
    discountPercent: 20,
    discountPrice: 18.72,
    ratingValue: 4.1,
    ratingCount: 111,
    offerType: "Flash Sales",
    colors: ["black"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
  {
    id: 21,
    name: "Nike Power Grip",
    price: 18.5,
    discountPercent: 10,
    discountPrice: 16.65,
    ratingValue: 3.9,
    ratingCount: 82,
    offerType: "Mega Discount",
    colors: ["blue", "yellow"],
    category: "Shoes",
    imageUrl: "/products/shoe-bottom.png",
  },
  {
    id: 22,
    name: "Puma Compact Bag",
    price: 24.2,
    discountPercent: 18,
    discountPrice: 19.84,
    ratingValue: 4.5,
    ratingCount: 128,
    offerType: "Hot Deals",
    colors: ["pink"],
    category: "Bags",
    imageUrl: "/products/bag-horizontal.png",
  },
  {
    id: 23,
    name: "Adidas Ultra Boost",
    price: 27.5,
    discountPercent: 25,
    discountPrice: 20.62,
    ratingValue: 4.8,
    ratingCount: 165,
    offerType: "Flash Sales",
    colors: ["red", "black", "blue"],
    category: "Shoes",
    imageUrl: "/products/shoe-left.png",
  },
  {
    id: 24,
    name: "Siemens Travel Kit",
    price: 14.7,
    discountPercent: 22,
    discountPrice: 11.47,
    ratingValue: 3.7,
    ratingCount: 66,
    offerType: "Mega Discount",
    colors: ["yellow", "wheat"],
    category: "Bags",
    imageUrl: "/products/bag-vertical.png",
  },
];

export default function Home() {
const [displayedProducts, setDisplayedProducts] = useState<Product[]>([...products]);
const [filteredProducts, setFilteredProducts] = useState<Product[]>([...products]);

const [selectedSpecialOffer, setSelectedSpecialOffer] = useState<string>("");
const [selectedPrice, setSelectedPrice] = useState<[number, number]>([3, 26]);
const [selectedColor, setSelectedColor] = useState<string>("");
const [selectedBrand, setSelectedBrand] = useState<string>("");
const [selectedCategory, setSelectedCategory] = useState<string>("");

const [selectedSortBy, setSelectedSortBy] = useState<string>("name");
const [selectedSortOrder, setSelectedSortOrder] = useState<string>("asc");
const [selectedItemsPerPage, setSelectedItemsPerPage] = useState<number>(6);

const [currentPage, setCurrentPage] = useState<number>(1);

useEffect(() => {
  let temp = [...products];

  if (selectedCategory) temp = temp.filter(p => p.category === selectedCategory);
  if (selectedBrand) temp = temp.filter(p => p.name.includes(selectedBrand));
  if (selectedColor) temp = temp.filter(p => p.colors.includes(selectedColor));
  if (selectedPrice) temp = temp.filter(p => p.discountPrice >= selectedPrice[0] && p.discountPrice <= selectedPrice[1]);
  if (selectedSpecialOffer) temp = temp.filter(p => p.offerType === selectedSpecialOffer);

  if (selectedSortBy) {
    temp.sort((a, b) => {
      let comparison = 0;

      if (selectedSortBy === "name") comparison = a.name.localeCompare(b.name);
      else if (selectedSortBy === "price") comparison = a.price - b.price;
      else if (selectedSortBy === "popularity") comparison = b.ratingCount - a.ratingCount;

      return selectedSortOrder === "asc" ? comparison : -comparison;
    });
  }

  setFilteredProducts(temp); // unpaginated

  const totalPages = Math.ceil(temp.length / selectedItemsPerPage);
  const newPage = currentPage > totalPages ? 1 : currentPage;
  setCurrentPage(newPage);

  const start = (newPage - 1) * selectedItemsPerPage;
  const end = start + selectedItemsPerPage;
  setDisplayedProducts(temp.slice(start, end));

}, [
  selectedCategory,
  selectedBrand,
  selectedColor,
  selectedPrice,
  selectedSpecialOffer,
  selectedSortBy,
  selectedSortOrder,
  selectedItemsPerPage,
  currentPage
]);

useEffect(()=>{
  setCurrentPage(1);
},[
  selectedCategory,
  selectedBrand,
  selectedColor,
  selectedPrice,
  selectedSpecialOffer,
  selectedSortBy,
  selectedSortOrder,
  selectedItemsPerPage,
])

  return (
    <>
    <Navbar />
    <div className="flex flex-row">
      <Sidebar 
        allProducts={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSpecialOffer={selectedSpecialOffer}
        setSelectedSpecialOffer={setSelectedSpecialOffer}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <MainContent 
        displayedProducts={displayedProducts}
        filteredProducts={filteredProducts}
        selectedSortBy={selectedSortBy} 
        setSelectedSortBy={setSelectedSortBy}
        selectedSortOrder={selectedSortOrder} 
        setSelectedSortOrder={setSelectedSortOrder} 
        selectedItemsPerPage={selectedItemsPerPage}
        setSelectedItemsPerPage={setSelectedItemsPerPage}
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        totalItems={filteredProducts.length} 
        itemsPerPage={selectedItemsPerPage}
        />
    </div>
    <Footer />
    </>
  );
}
