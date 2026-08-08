import React from 'react'
import { useCart } from '../../../context/CartContext';
import Button from '../../common/Button/Button'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTag } from 'react-icons/fi'

const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;
const TAX_RATE = 0.05;

const CartSummary = () => {
  const { totalItems, totalPrice } = useCart();
  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h2 className="text-xl font-bold mb-6">
        Order Summary
      </h2>

      {/* Items */}
      <div className="text-gray-600 flex justify-between items-center mb-4">
        <span>
          Items ({totalItems})
        </span>

        <span>
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">
          Subtotal
        </span>

        <span className="font-semibold">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">
          Shipping
        </span>

        {shipping === 0 ? (
          <span className="text-green-600 font-semibold">
            FREE
          </span>
        ) : (
          <span className="font-semibold">
            ${shipping.toFixed(2)}
          </span>
        )}
      </div>

      {/* Tax */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-600">
          Tax
        </span>

        <span className="font-semibold">
          ${tax.toFixed(2)}
        </span>
      </div>

      <div className="border-t border-gray-200 mb-6" />

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold">
          Total
        </span>

        <span className="text-primary text-2xl font-bold">
          ${grandTotal.toFixed(2)}
        </span>
      </div>

      {/* Free Shipping Message */}
      {shipping > 0 && (
        <div className="bg-blue-50 rounded-lg text-blue-700 text-sm p-3 mb-5">
          Add $
          {(FREE_SHIPPING_THRESHOLD - totalPrice).toFixed(2)}
          {" "}more to get free shipping.
        </div>
      )}

      {/* Coupon */}
      <button
        type="button"
        className="w-full border border-gray-200 rounded-lg text-gray-700 text-sm font-medium flex items-center gap-2 px-4 py-3 mb-5 transition hover:bg-gray-50"
      >
        <FiTag />

        <span>
          Apply Coupon
        </span>
      </button>

      {/* Checkout */}
      <Link to="/checkout">
        <Button
          fullWidth
          endIcon={<FiArrowRight />}
        >
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  )
}

export default CartSummary