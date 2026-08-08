import React from 'react'
import Button from '../../common/Button/Button'
import { FiMinus, FiPlus } from 'react-icons/fi'

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max,
}) => {
  const isMin = quantity <= min;
  const isMax = max !== undefined && quantity >= max;

  return (
    <div className="flex items-center gap-1">
      <Button
        size="sm"
        variant="outline"
        isIconOnly
        onClick={onDecrease}
        disabled={isMin}
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
        disabled={isMax}
      >
        <FiPlus />
      </Button>
    </div>
  )
}

export default QuantitySelector