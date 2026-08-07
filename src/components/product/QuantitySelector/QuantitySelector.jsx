import React from 'react'
import Button from '../../common/Button/Button'
import { FiMinus, FiPlus } from 'react-icons/fi'

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        size="sm"
        variant="outline"
        isIconOnly
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        <FiMinus />
      </Button>

      <span className="w-8 font-semibold text-center">
        {quantity}
      </span>

      <Button
        size="sm"
        variant="outline"
        isIconOnly
        onClick={onIncrease}
      >
        <FiPlus />
      </Button>
    </div>
  )
}

export default QuantitySelector