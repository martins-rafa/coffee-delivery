import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { Paragraph } from '../../../../../../components/Typography'
import { CartContext, CartItem } from '../../../../../../contexts/CartContext'
import {
  ActionsContainer,
  CheckoutProductCardContainer,
  RemoveButton,
} from './styles'

interface ProductCartProps {
  product: CartItem
}

export function CheckoutProductCard({ product }: ProductCartProps) {
  const { changeCartItemQuantity, removeProductFromCart } =
    useContext(CartContext)
  const total = (product.price * product.quantity).toFixed(2)

  function handleIncreaseQuantity() {
    changeCartItemQuantity(product.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCartItemQuantity(product.id, 'decrease')
  }

  function handleRemoveProduct() {
    removeProductFromCart(product.id)
  }

  return (
    <CheckoutProductCardContainer>
      <div>
        <img src={`/products/${product.image}`} alt="" />
        <div>
          <Paragraph color="subtitle">{product.name}</Paragraph>

          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              quantity={product.quantity}
            />
            <RemoveButton onClick={handleRemoveProduct}>
              <Trash size={16} />
              REMOVE
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{`$ ${total}`}</p>
    </CheckoutProductCardContainer>
  )
}
