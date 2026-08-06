import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">
        404
      </h1>
      <p className="text-slate-600 mt-4">
        Page not found.
      </p>

      <Link
        to="/"
        className="bg-blue-600 rounded-lg text-white px-6 py-3 mt-8"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound