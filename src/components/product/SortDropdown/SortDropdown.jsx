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
      className="border border-gray-300 rounded-xl outline-none px-4 py-3 focus:border-blue-500"
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