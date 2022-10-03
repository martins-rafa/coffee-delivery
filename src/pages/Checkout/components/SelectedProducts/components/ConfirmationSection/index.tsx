import { useContext } from 'react'
import { Button } from '../../../../../../components/Button'
import { Paragraph } from '../../../../../../components/Typography'
import { CartContext } from '../../../../../../contexts/CartContext'
import { ConfirmationSectionContainer } from './styles'

const deliveryFee = 3.49

export function ConfirmationSection() {
  const { productsTotal, cartQuantity } = useContext(CartContext)
  const OrderTotal = (productsTotal + deliveryFee).toFixed(2)

  return (
    <ConfirmationSectionContainer>
      <div>
        <Paragraph size="s">Products Total</Paragraph>
        <Paragraph>{`$ ${productsTotal.toFixed(2)}`}</Paragraph>
      </div>

      <div>
        <Paragraph size="s">Delivery</Paragraph>
        <Paragraph>{`$ ${deliveryFee}`}</Paragraph>
      </div>

      <div>
        <Paragraph weight={700} color="subtitle" size="l">
          Total
        </Paragraph>
        <Paragraph weight={700} color="subtitle" size="l">
          {`$ ${OrderTotal}`}
        </Paragraph>
      </div>

      <Button text="Confirm Order" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
