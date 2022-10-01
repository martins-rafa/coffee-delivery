import { Title } from '../../../../components/Typography'
import { CheckoutProductCard } from './components/CheckoutProductCard'
import { ConfirmationSection } from './components/ConfirmationSection'
import { DetailsContainer, SelectedProductsContainer } from './styles'

export function SelectedProducts() {
  return (
    <SelectedProductsContainer>
      <Title size="xs" color="subtitle">
        Selected products
      </Title>

      <DetailsContainer>
        <CheckoutProductCard />
        <CheckoutProductCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  )
}
