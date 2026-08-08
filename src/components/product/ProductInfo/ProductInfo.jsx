import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../../context/CartContext'
import Rating from '../Rating/Rating'
import StockBadge from '../StockBadge/StockBadge'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import Button from '../../common/Button/Button'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'
import { useAuth } from '../../../context/AuthContext'

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const rating = useMemo(() => (4 + Math.random()).toFixed(1), []);
  const reviews = useMemo(() => Math.floor(Math.random() * 500) + 50, []);
  const originalPrice = Math.round(product.price * 1.25);
  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

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
        <strong className="text-primary text-3xl font-bold">
          ${product.price}
        </strong>
        <strong className="text-gray-400 text-xl line-through">
          ${originalPrice}
        </strong>
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
          variant="warning"
          size="sm"
          isIconOnly
        >
          <FiHeart />
        </Button>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 xs:flex-row">
        {user ? (
          <Button
            fullWidth
            startIcon={<FiShoppingCart />}
            onClick={() => addToCart(product, quantity)}
          >
            Add To Cart
          </Button>
        ) : (
          <Button
            fullWidth
            startIcon={<FiShoppingCart />}
            onClick={() => navigate("/login")}
          >
            Add To Cart
          </Button>
        )}

        <Button
          variant="success"
          fullWidth
          startIcon={<FaBolt />}
          onClick={handleBuyNow}
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