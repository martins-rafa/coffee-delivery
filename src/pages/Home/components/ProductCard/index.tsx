import { ShoppingCart } from 'phosphor-react'

import {
  ProductCardContainer,
  ProductTagsContainer,
  ProductTag,
  ProductName,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  AddToCartWrapper,
  AddToCartButton,
} from './styles'

import { Paragraph, Title } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'

export interface Product {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

interface ProductProps {
  product: Product
}

export function ProductCard({ product }: ProductProps) {
  return (
    <ProductCardContainer>
      <img src={`/products/${product.image}`} alt="" />

      <ProductTagsContainer>
        {product.tags.map((tag) => {
          return <ProductTag key={`${product.id}${tag}`}>{tag}</ProductTag>
        })}
      </ProductTagsContainer>

      <ProductName>{product.name}</ProductName>

      <ProductDescription>{product.description}</ProductDescription>

      <ProductFooter>
        <ProductPrice>
          <Paragraph size="s">$</Paragraph>
          <Title size="m" color="text" as="strong">
            {product.price.toFixed(2)}
          </Title>
        </ProductPrice>

        <AddToCartWrapper>
          <QuantityInput />
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </AddToCartWrapper>
      </ProductFooter>
    </ProductCardContainer>
  )
}
