import React from 'react'

const ImageSkeleton = ({ className = "" }) => {
  return (
    <div className={`bg-gray-200 animate-pulse ${className} `} />
  )
}

export default ImageSkeleton