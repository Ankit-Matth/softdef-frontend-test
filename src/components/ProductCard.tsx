import React from "react";
import { Product } from "@/app/page";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const offerMap: Record<string, { color: string; label: string }> = {
    HotDeals: { color: "#FF4858", label: "HOT" },
    MegaDiscount: { color: "#73ff48", label: "Mega" },
    FlashSales: { color: "#a6b935", label: "Flash" },
  };

  return (
    <div className="rounded overflow-hidden bg-[#f7f7f6]">
      <div className="relative">
        {product.offerType && offerMap[product.offerType] && (
          <div
            className="absolute top-2 left-2 text-white py-1 px-3 rounded font-semibold text-sm"
            style={{ backgroundColor: offerMap[product.offerType].color }}
          >
            {offerMap[product.offerType].label}
          </div>
        )}

        {product.colors.length > 0 && (
          <div className="absolute top-2 right-2 flex space-x-1">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <img
          className="w-full h-56 object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="mt-4 bg-white py-3 px-2 border border-gray-100 border-t-0">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        <div className="flex flex-row mt-2 items-center justify-center space-x-1">
          {[...Array(Math.round(product.ratingValue))].map((_, index) => (
            <span key={index} className="text-yellow-400 text-xl">★</span>
          ))}
          {[...Array(5 - Math.round(product.ratingValue))].map((_, index) => (
            <span key={index} className="text-gray-400 text-xl">★</span>
          ))}
          <span className="text-gray-600 ml-2 text-sm">({product.ratingCount})</span>
        </div>

        <div className="mt-2 flex items-center justify-center space-x-2">
          <span className="text-xl font-bold text-[#40BFFF]">${product.discountPrice}</span>
          <span className="text-sm text-gray-500 line-through">${product.price}</span>
          <span className="text-xs text-red-500">{product.discountPercent}% Off</span>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  displayedProducts: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ displayedProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
