import React from 'react'
import { SORT_OPTIONS } from '../../../constants/sortOptions'

const SortDropdown = ({
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-11 bg-white border border-slate-300 rounded-xl text-base font-semibold leading-tight! outline-none px-4 py-2 focus:border-blue-500"
    >
      {SORT_OPTIONS.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SortDropdown