import React from 'react'
import Button from '../../common/Button/Button'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const EmptyCart = () => {
  return (
    <div className="bg-white rounded-2xl flex justify-center items-center flex-col text-center shadow-sm px-6 py-20">
      <div className="bg-gray-100 rounded-full p-6 mb-6">
        <FiShoppingCart
          size={60}
          className="text-gray-400"
        />
      </div>

      <h2 className="text-3xl font-bold mb-2">
        Your cart is empty
      </h2>

      <p className="max-w-md text-gray-500 mb-8">
        Looks like you haven't added anything yet.
        Explore our products and start shopping.
      </p>

      <Link to="/">
        <Button>
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}

export default EmptyCart