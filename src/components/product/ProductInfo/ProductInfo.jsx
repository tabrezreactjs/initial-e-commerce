import React, { useMemo, useState } from 'react'
import Rating from '../Rating/Rating'
import StockBadge from '../StockBadge/StockBadge'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import Button from '../../common/Button/Button'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const rating = useMemo(() => (4 + Math.random()).toFixed(1), []);

  const reviews = useMemo(() => Math.floor(Math.random() * 500) + 50, []);

  const originalPrice = Math.round(product.price * 1.25);

  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Category */}
      <span className="w-fit bg-primary/10 rounded-full text-primary text-sm font-medium">
        {product.category?.name}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">
        {product.title}
      </h1>

      {/* Rating */}
      <Rating
        value={Number(rating)}
        reviews={reviews}
      />

      {/* Price */}
      <div className="flex items-baseline flex-wrap gap-3">
        <span className="text-primary text-3xl font-bold">
          ${product.price}
        </span>

        <span className="text-gray-400 text-xl line-through">
          ${originalPrice}
        </span>

        <span className="bg-green-100 rounded text-green-700 text-sm font-semibold px-2 py-1">
          {discount}% OFF
        </span>
      </div>

      {/* Stock */}
      <StockBadge />

      {/* Description */}
      <p className="text-gray-600 leading-tight!">
        {product.description}
      </p>

      {/* Quantity */}
      <div className="flex items-end gap-3 sm:flex-row">
        <div className='w-fit'>
          <h4 className="font-semibold mb-1">
            Quantity
          </h4>

          <QuantitySelector
            quantity={quantity}
            onIncrease={() =>
              setQuantity((prev) => prev + 1)
            }
            onDecrease={() =>
              setQuantity((prev) =>
                Math.max(1, prev - 1)
              )
            }
          />
        </div>

        <Button
          size="sm"
          variant="outline"
          isIconOnly
        >
          <FiHeart />
        </Button>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          fullWidth
          startContent={<FiShoppingCart />}
        >
          Add To Cart
        </Button>

        <Button
          fullWidth
          variant="warning"
          startContent={<FaBolt />}
        >
          Buy Now
        </Button>
      </div>

      {/* Delivery */}
      <div className="bg-white border border-gray-200 rounded-xl text-sm space-y-2 p-4">
        <p>🚚 Free Delivery in 3–5 Days</p>
        <p>🔄 7 Days Easy Returns</p>
        <p>🔒 100% Secure Payment</p>
      </div>
    </div>
  )
}

export default ProductInfo