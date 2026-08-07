import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({
  value = 4.8,
  reviews = 124,
}) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <div className="flex items-center gap-3">
      <div className="text-yellow-400 flex">
        {Array.from({ length: fullStars }).map((_, index) => (
          <FaStar key={index} />
        ))}

        {hasHalfStar && <FaStarHalfAlt/>}
      </div>

      <span className="text-gray-600 text-sm">
        {value} ({reviews} Reviews)
      </span>
    </div>
  )
}

export default Rating