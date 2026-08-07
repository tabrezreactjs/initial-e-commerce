import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';

const ProductGrid = ({
  products,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="w-full grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-16">
        {error}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-gray-500 text-center py-16">
        No products found.
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid