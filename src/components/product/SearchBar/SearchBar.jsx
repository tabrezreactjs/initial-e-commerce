import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full md:w-96 relative">
      <FiSearch
        className="text-gray-400 absolute top-1/2 left-4 -translate-y-1/2"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 bg-white border border-slate-300 rounded-xl text-base font-semibold leading-tight! block outline-none pl-11 pr-4 py-2 transition focus:border-blue-500"
      />
    </div>
  )
}

export default SearchBar