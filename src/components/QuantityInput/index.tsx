import { Minus, Plus } from 'phosphor-react'
import { QuantityButton, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <QuantityButton disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </QuantityButton>

      <input type="number" readOnly value={quantity} />

      <QuantityButton onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </QuantityButton>
    </QuantityInputContainer>
  )
}
