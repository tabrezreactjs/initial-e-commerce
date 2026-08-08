import React from 'react'

const CartItemSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl flex flex-col gap-5 p-5 animate-pulse md:flex-row">
      {/* Image */}
      <div className="w-full h-36 bg-gray-200 rounded-xl md:h-36 md:w-36" />

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3">

        {/* Category */}
        <div className="w-24 h-4 bg-gray-200 rounded" />

        {/* Title */}
        <div className="w-3/4 h-6 bg-gray-200 rounded" />

        {/* Description */}
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-2/3 h-4 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="w-32 h-7 bg-gray-200 rounded" />

        {/* Bottom */}
        <div className="flex justify-between items-center mt-auto">
          <div className="w-28 h-10 bg-gray-200 rounded" />

          <div className="w-20 h-8 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export default CartItemSkeleton