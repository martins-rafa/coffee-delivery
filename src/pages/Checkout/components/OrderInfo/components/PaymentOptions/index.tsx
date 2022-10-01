import { PaymentMethodInput } from '../../../PaymentMethodInput'
import { PaymentOptionsContainer } from './styles'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentOptionsContainer>
  )
}
