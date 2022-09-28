import { Title } from '../../../../components/Typography'
import { products } from '../../../../data/products'
import { ProductCard } from '../ProductCard'
import { ProductsContainer, ProductsList } from './styles'

export function Products() {
  return (
    <ProductsContainer className="container">
      <Title size="l" color="subtitle" as="h2">
        Our coffees
      </Title>

      <ProductsList>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ProductsList>
    </ProductsContainer>
  )
}
