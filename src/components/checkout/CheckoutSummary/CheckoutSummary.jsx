import React from 'react'
import { useCart } from '../../../context/CartContext'
import Image from '../../common/Image/Image';
import Button from '../../common/Button/Button';
import { FiCheckCircle } from 'react-icons/fi';

const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;
const TAX_RATE = 0.05;

const CheckoutSummary = ({ onPlaceOrder, loading = false }) => {
  const { cart, totalItems, totalPrice } = useCart();
  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h2 className="text-xl font-bold mb-6">
        Order Summary
      </h2>

      {/* Products */}
      <div className="space-y-4 mb-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3"
          >
            <Image
              src={item.images?.[0]}
              alt={item.title}
              className="w-14 h-14 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium line-clamp-1">
                {item.title}
              </p>

              <p className="text-gray-500 text-sm">
                Qty: {item.quantity}
              </p>
            </div>

            <span className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-5">
        <div className="text-gray-600 flex justify-between mb-3">
          <span>
            Items ({totalItems})
          </span>

          <span>
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="text-gray-600 flex justify-between mb-3">
          <span>
            Shipping
          </span>

          <span>
            {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="text-gray-600 flex justify-between mb-5">
          <span>
            Tax
          </span>

          <span>
            ${tax.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-gray-200 flex justify-between items-center pt-5 mb-3">
          <span className="text-lg font-bold">
            Total
          </span>

          <span className="text-primary text-2xl font-bold">
            ${grandTotal.toFixed(2)}
          </span>
        </div>

        <Button
          variant="success"
          fullWidth
          endIcon={<FiCheckCircle />}
          loading={loading}
          onClick={onPlaceOrder}
          disabled={loading || cart.length === 0}
        >
          Place Order
        </Button>
      </div>
    </div>
  )
}

export default CheckoutSummary