import { createContext, ReactNode, useEffect, useState } from 'react'
import { Product } from '../pages/Home/components/ProductCard'
import { produce } from 'immer'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  productsTotal: number
  AddProductToCart: (product: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeProductFromCart: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const cartStorageKey = '@coffeeDelivery:products'

function loadStorageCartData() {
  const storedData = localStorage.getItem(cartStorageKey)

  if (storedData) {
    return JSON.parse(storedData)
  }

  return []
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadStorageCartData)

  const cartQuantity = cartItems.length

  const productsTotal = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  function AddProductToCart(product: CartItem) {
    const isProductInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (isProductInCart < 0) {
        draft.push(product)
      } else {
        draft[isProductInCart].quantity += product.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const isProductInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (isProductInCart >= 0) {
        const item = draft[isProductInCart]
        draft[isProductInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeProductFromCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const isProductInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (isProductInCart >= 0) {
        draft.splice(isProductInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(cartStorageKey, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        productsTotal,
        AddProductToCart,
        changeCartItemQuantity,
        removeProductFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
