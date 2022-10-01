import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { Paragraph } from '../../../../../../components/Typography'
import {
  ActionsContainer,
  CheckoutProductCardContainer,
  RemoveButton,
} from './styles'

export function CheckoutProductCard() {
  return (
    <CheckoutProductCardContainer>
      <div>
        <img src="/products/Expresso.png" alt="" />
        <div>
          <Paragraph color="subtitle">Expresso</Paragraph>

          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVE
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$ 9.90</p>
    </CheckoutProductCardContainer>
  )
}
