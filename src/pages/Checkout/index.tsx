import { OrderInfo } from './components/OrderInfo'
import { CheckoutForm } from './styles'

export function CheckoutPage() {
  return (
    <CheckoutForm className="container">
      <OrderInfo />
    </CheckoutForm>
  )
}
