import React from 'react'

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="rounded overflow-hidden bg-[#f7f7f6]">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-[#FF4858] text-white py-1.5 px-4 rounded">
          HOT
        </div>
        
        <img
          className="w-full h-56 object-cover"
          src={product.imageUrl} 
          alt={product.name}
        />
      </div>

      <div className="mt-4 bg-white py-3 px-2 border-2 border-gray-100 border-t-0">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        <div className="flex flex-row mt-2 items-center justify-center space-x-3">
          {[...Array(product.rating)].map((_, index) => (
            <span key={index} className="text-yellow-400 text-xl">★</span>
          ))}
          {[...Array(5 - product.rating)].map((_, index) => (
            <span key={index} className="text-gray-400 text-xl">★</span>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-center space-x-1">
          <span className="text-xl font-bold text-[#40BFFF]">${product.currentPrice}</span>
          <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
          <span className="text-xs text-red-500 ml-2">{product.discount}% Off</span>
        </div>
      </div>
    </div>
  )
}

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Nike Air Max 270 React', imageUrl: '/products/shoe-left.png', rating: 4, currentPrice: 299.43, originalPrice: 524.33, discount: 24 },
    { id: 2, name: 'Nike Air Max 270 React', imageUrl: '/products/bag-horizontal.png', rating: 4, currentPrice: 299.43, originalPrice: 534.33, discount: 24 },
    { id: 3, name: 'Nike Air Max 270 React', imageUrl: '/products/bag-vertical.png', rating: 4, currentPrice: 299.43, originalPrice: 534.33, discount: 24 },
    { id: 4, name: 'Nike Air Max 270 React', imageUrl: '/products/shoe-bottom.png', rating: 5, currentPrice: 299.43, originalPrice: 534.33, discount: 24 },
    { id: 5, name: 'Nike Air Max 270 React', imageUrl: '/products/shoe-right.png', rating: 3, currentPrice: 299.43, originalPrice: 534.33, discount: 24 },
    { id: 6, name: 'Nike Air Max 270 React', imageUrl: '/products/shoe-back.png', rating: 5, currentPrice: 299.43, originalPrice: 524.33, discount: 24 }
  ]

  return (
    <div className="grid grid-cols-3 gap-8 my-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
