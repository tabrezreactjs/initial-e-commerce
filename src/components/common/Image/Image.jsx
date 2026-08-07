import React, { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";

const FALLBACK_IMAGE = "https://placehold.co/600x600?text=No+Image";

const Image = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
}) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <div className={`overflow-hidden relative ${skeletonClassName}`}>
      {loading && (
        <ImageSkeleton
          className='bg-gray-200 absolute inset-0 animate-pulse'
        />
      )}

      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setImageSrc(FALLBACK_IMAGE);
          setLoading(false);
        }}
        className={`duration-300 ease-in-out transition-all
          ${loading ? "opacity-0" : "opacity-100"}
          ${className}
        `}
      />
    </div>
  )
}

export default Image