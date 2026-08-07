import React from 'react'
import Skeleton from '../../common/Skeleton/Skeleton'

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden duration-300 ease-in-out transition-all group">
      {/* Image */}
      <div className="block overflow-hidden relative">
        {/* Badge */}
        <Skeleton className="w-20 h-6 rounded-full z-10 absolute top-3 left-3" />

        {/* Wishlist */}
        <Skeleton className="w-10 h-10 rounded-full z-10 absolute top-3 right-3" />

        {/* Product Image */}
        <Skeleton className=" w-full rounded-none aspect-square" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-1 p-4">
        {/* Category */}
        <Skeleton className="w-24 h-5" />

        {/* Title */}
        <Skeleton className="w-full h-7" />

        {/* Rating */}
        <div className="flex items-center gap-2 mb-1">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-8 h-5" />
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1 mt-auto">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-12 h-5" />
          <Skeleton className="w-14 h-5" />
        </div>

        {/* Button */}
        <Skeleton className="w-full h-9 rounded-xl" />
      </div>
    </div>
  )
}

export default ProductCardSkeleton