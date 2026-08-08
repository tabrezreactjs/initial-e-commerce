import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartList = ({ cart }) => {
  return (
    <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-8'>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default CartList