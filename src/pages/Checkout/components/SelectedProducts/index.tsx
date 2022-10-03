import { useContext } from 'react'
import { Title } from '../../../../components/Typography'
import { CartContext } from '../../../../contexts/CartContext'
import { CheckoutProductCard } from './components/CheckoutProductCard'
import { ConfirmationSection } from './components/ConfirmationSection'
import { DetailsContainer, SelectedProductsContainer } from './styles'

export function SelectedProducts() {
  const { cartItems } = useContext(CartContext)

  return (
    <SelectedProductsContainer>
      <Title size="xs" color="subtitle">
        Selected products
      </Title>

      <DetailsContainer>
        {cartItems.map((product) => (
          <CheckoutProductCard key={product.id} product={product} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  )
}
