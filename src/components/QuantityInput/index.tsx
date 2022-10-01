import { Minus, Plus } from 'phosphor-react'
import { QuantityButton, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <QuantityButton>
        <Minus size={14} weight="fill" />
      </QuantityButton>

      <input type="number" readOnly value={1} />

      <QuantityButton>
        <Plus size={14} weight="fill" />
      </QuantityButton>
    </QuantityInputContainer>
  )
}
