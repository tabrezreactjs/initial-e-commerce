import React, { useState } from 'react'
import { useCart } from '../../../context/CartContext'
import QuantitySelector from '../../product/QuantitySelector/QuantitySelector'
import Button from '../../common/Button/Button'
import Image from '../../common/Image/Image'
import { FiTrash2 } from 'react-icons/fi'

const CartItem = ({ product }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const originalPrice = Math.round(product.price * 1.25);
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);
  const itemTotal = product.price * product.quantity;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl flex flex-col gap-5 shadow-sm p-5 transition-shadow md:flex-row hover:shadow-md">
      {/* Product Image */}
      <div className="w-full h-36 rounded-xl overflow-hidden md:w-36 md:h-36">
        <Image
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover"
          skeletonClassName="w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
          {product.category?.name}
        </p>

        <h2 className="text-xl font-semibold mb-2">
          {product.title}
        </h2>

        <p className="text-gray-600 leading-tight! line-clamp-2 mb-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mb-2">
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

        {/* Footer */}
        <div className="flex flex-col gap-4 mt-auto lg:justify-between lg:items-center lg:flex-row">
          <QuantitySelector
            quantity={product.quantity}
            onIncrease={() => increaseQuantity(product.id)}
            onDecrease={() => decreaseQuantity(product.id)}
          />

          <div className="flex justify-between items-center gap-5 lg:justify-start">
            <span className="text-lg font-bold">
              Total: ${itemTotal.toFixed(2)}
            </span>

            <Button
              variant="danger"
              size="sm"
              startIcon={<FiTrash2 />}
              onClick={() => setShowConfirm(true)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="bg-black/50 flex justify-center items-center z-100 px-4 fixed inset-0">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-bold">
              Remove Item?
            </h2>

            <p className="text-gray-600 mt-2">
              Are you sure you want to remove{" "}
              <span className="font-semibold">
                {product.title}
              </span>{" "}
              from your cart?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  removeFromCart(product.id);
                  setShowConfirm(false);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartItem