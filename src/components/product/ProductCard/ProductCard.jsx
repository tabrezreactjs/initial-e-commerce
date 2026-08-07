import React, { useMemo, useState } from 'react'
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import Image from '../../common/Image/Image';
import Rating from '../Rating/Rating';

const ProductCard = ({ product }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const rating = useMemo(() => (4 + Math.random()).toFixed(1), []);

  // Fake Discount (We'll replace later if backend provides it)
  const originalPrice = Math.round(product.price * 1.25);

  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  const badge = (() => {
    if (product.price > 500)
      return {
        label: "PREMIUM",
        color: "bg-purple-600",
      };

    if (product.price > 150)
      return {
        label: "TRENDING",
        color: "bg-blue-600",
      };

    return {
      label: "NEW",
      color: "bg-green-600",
    };
  })();

  return (
    <div className=" bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden duration-300 ease-in-out transition-all group hover:shadow-2xl hover:-translate-y-2">
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="block overflow-hidden relative"
      >
        {/* Badge */}
        <span className={`${badge.color} rounded-full text-white text-xs font-semibold z-10 px-3 py-1 absolute top-3 left-3`}>
          {badge.label}
        </span>

        {/* Wishlist */}
        <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center z-10 shadow-md absolute top-3 right-3 duration-300 transition-all hover:bg-red-50 hover:text-red-500 hover:scale-110 active:scale-95">
          <FiHeart />
        </button>

        {/* Product Image */}
        <div className="w-full aspect-square overflow-hidden relative">
          <div className="w-full h-full bg-black/40 opacity-0 flex justify-center items-center z-1 absolute inset-0 duration-300 transition-all group-hover:opacity-100" />
          <Image
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-110"
            skeletonClassName="w-full h-full"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-1 p-4">
        {/* Category */}
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide line-clamp-2">
          {product.category?.name}
        </p>

        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold line-clamp-2 transition group-hover:text-blue-600">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-1">
          <Rating value={Number(rating)} />
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1 mt-auto">
          <span className="text-primary text-2xl font-bold">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through">
            ${originalPrice}
          </span>
          <span className="text-green-600 text-sm font-semibold">
            {discount}% OFF
          </span>
        </div>

        {/* Button */}
        <Button
          fullWidth
          size='sm'
          startContent={<FiShoppingCart />}
          className="duration-300 transition-all group-hover:scale-[1.02]"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard