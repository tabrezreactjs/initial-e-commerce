import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="w-full min-h-dvh bg-slate-100">
      <div className="w-full min-h-dvh grid lg:grid-cols-2">
        {/* Left */}
        <div className="w-full bg-blue-600 text-white hidden justify-center items-center lg:flex">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-5xl font-bold">
              Welcome to ShopX
            </h1>
            <p className="text-lg text-blue-100">
              Discover thousands of products at the best prices.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full flex justify-center items-center p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout