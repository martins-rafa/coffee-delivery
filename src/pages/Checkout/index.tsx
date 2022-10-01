import { OrderInfo } from './components/OrderInfo'
import { SelectedProducts } from './components/SelectedProducts'
import { CheckoutForm } from './styles'

export function CheckoutPage() {
  return (
    <CheckoutForm className="container">
      <OrderInfo />
      <SelectedProducts />
    </CheckoutForm>
  )
}
