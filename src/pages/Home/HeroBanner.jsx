import React from 'react'
import { useAuth } from '../../context/AuthContext';

const HeroBanner = () => {
  const { user } = useAuth();

  return (
    <section className="w-full py-20">
      <h1 className="text-5xl font-bold">
        {user ? (
          <>Shop Smarter.</>
        ) : (
          <>Welcome to ShopX</>
        )}
      </h1>

      <p className="text-slate-600 mt-6">
        {user ? (
          <>Discover thousands of amazing products.</>
        ) : (
          <>Modern shopping experience built with React, Tailwind CSS and Platzi Fake Store API.</>
        )}
      </p>
    </section>
  )
}

export default HeroBanner