import React, { useEffect, useState } from 'react'
import Image from '../../common/Image/Image';
import ProductThumbnail from './ProductThumbnail';

const ProductGallery = ({ images = [], title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [images.length]);

  if (!images.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl aspect-square flex justify-center items-center">
        <span className="text-gray-500 text-sm">No Image Available</span>
      </div>
    );
  }

  const selectedImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col-reverse gap-4 xs:flex-row md:flex-col-reverse lg:flex-row">
      {/* Thumbnails */}
      <div className="flex flex-row gap-3 overflow-x-auto xs:flex-col md:flex-row lg:flex-col lg:overflow-hidden">
        {images.map((image, index) => (
          <ProductThumbnail
            key={`${image}-${index}`}
            image={image}
            active={selectedIndex === index}
            onClick={() => {
              console.log("Clicked:", image);
              setSelectedIndex(index);
            }}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-white border border-gray-200 rounded-2xl aspect-square flex-1 overflow-hidden relative group xs:max-w-96">
        <Image
          src={selectedImage}
          alt={title}
          lazy={false}
          className="w-full h-full object-cover duration-500 transition-transform group-hover:scale-110"
          skeletonClassName="w-full h-full"
        />
      </div>
    </div>
  )
}

export default ProductGallery