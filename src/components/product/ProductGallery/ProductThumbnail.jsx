import React from 'react'
import Image from '../../common/Image/Image'

const ProductThumbnail = ({
  image,
  active,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-20 h-20 border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${active
          ? "border-primary shadow-lg"
          : "border-gray-200 hover:border-gray-400"
        }
      `}
    >
      <Image
        src={image}
        alt="Product thumbnail"
        lazy={true}
        className="w-full h-full object-cover"
        skeletonClassName="w-full h-full"
      />
    </button>
  )
}

export default ProductThumbnail