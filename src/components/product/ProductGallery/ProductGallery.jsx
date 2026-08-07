import React, { useEffect, useState } from 'react'
import Image from '../../common/Image/Image';
import ProductThumbnail from './ProductThumbnail';

const ProductGallery = ({ images = [], title }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  useEffect(() => {
    setSelectedImage(images[0] || "");
  }, [images]);

  if (!images.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl aspect-square flex justify-center items-center">
        <span className="text-gray-500 text-sm">No Image Available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row">
      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-hidden">
        {images.map((image, index) => (
          <ProductThumbnail
            key={`${image}-${index}`}
            image={image}
            active={selectedImage === image}
            onClick={() => {
              console.log("Clicked:", image);
              setSelectedImage(image);
            }}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-white border border-gray-200 rounded-2xl aspect-square flex-1 overflow-hidden relative group">
        <Image
          src={selectedImage}
          alt={title}
          className="w-full h-full object-cover duration-500 transition-transform group-hover:scale-110"
          skeletonClassName="w-full h-full"
        />
      </div>
    </div>
  )
}

export default ProductGallery