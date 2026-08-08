import React, { useState } from 'react'
import { useCart } from '../../context/CartContext';
import EmptyCart from '../../components/cart/EmptyCart/EmptyCart';
import CartList from '../../components/cart/CartList/CartList';
import CartSummary from '../../components/cart/CartSummary/CartSummary';
import Button from '../../components/common/Button/Button';
import { FiTrash2 } from 'react-icons/fi';
import CartItemSkeleton from '../../components/cart/CartItemSkeleton/CartItemSkeleton';

const Cart = () => {
  const { cart, clearCart, loading } = useCart();
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  if (!cart.length) {
    return (
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl px-6 mx-auto">
          <EmptyCart />
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="w-full max-w-7xl pb-10 pt-4 px-4 mx-auto md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-8 sm:justify-between sm:items-center sm:flex-row">
          <div className='flex flex-col gap-1'>
            <h1 className="text-3xl font-bold">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm">
              {cart.length} product{cart.length !== 1 ? "s" : ""}
            </p>
          </div>

          <Button
            variant="danger"
            size="sm"
            startIcon={<FiTrash2 />}
            onClick={() => setShowClearConfirm(true)}
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="w-full lg:col-span-8">
            {loading ? (
              <>
                <CartItemSkeleton />
                <CartItemSkeleton />
                <CartItemSkeleton />
              </>
            ) : (
              <CartList cart={cart} />
            )}
          </div>

          <div className="w-full lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Clear Cart Confirmation */}
      {showClearConfirm && (
        <div className="bg-black/50 flex justify-center items-center z-100 px-4 fixed inset-0">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-bold">
              Clear Cart?
            </h2>

            <p className="text-gray-600 mt-2">
              Are you sure you want to remove all
              products from your cart?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowClearConfirm(false)}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  clearCart();
                  setShowClearConfirm(false);
                }}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart