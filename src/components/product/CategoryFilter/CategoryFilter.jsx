import React from 'react'

const CategoryFilter = ({
  categories,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-11 bg-white border border-slate-300 rounded-xl text-base font-semibold leading-tight! block outline-none px-4 py-2 focus:border-blue-500"
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option
          key={category.id}
          value={category.id}
        >
          {category.name}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter