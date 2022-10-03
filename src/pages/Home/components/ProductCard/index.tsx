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
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

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
  const [quantity, setQuantity] = useState(1)

  const { AddProductToCart } = useContext(CartContext)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    }

    AddProductToCart(productToAdd)
    setQuantity(1)
  }

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
          <QuantityInput
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            quantity={quantity}
          />
          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </AddToCartWrapper>
      </ProductFooter>
    </ProductCardContainer>
  )
}
