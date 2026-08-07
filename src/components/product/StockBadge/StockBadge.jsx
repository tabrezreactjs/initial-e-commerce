import React from 'react'

const StockBadge = ({ inStock = true }) => {
  return (
    <span
      className={`w-fit rounded-full text-sm font-medium inline-flex px-3 py-1 ${inStock
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
        }
      `}
    >
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  )
}

export default StockBadge