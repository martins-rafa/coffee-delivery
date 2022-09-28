import { Minus, Plus } from 'phosphor-react'
import { QuantityButton, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
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
