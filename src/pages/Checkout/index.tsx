/* eslint-disable no-unused-vars */
import { OrderInfo } from './components/OrderInfo'
import { SelectedProducts } from './components/SelectedProducts'
import { CheckoutForm } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Please enter your CEP'),
  street: zod.string().min(1, 'Please enter your street'),
  number: zod.string().min(1, 'Please enter your number'),
  complement: zod.string(),
  district: zod.string().min(1, 'Please enter your district'),
  city: zod.string().min(1, 'Please enter your city'),
  state: zod.string().min(1, 'Please enter your state'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Please select a payment method' }
    },
  }),
})

export type CheckoutData = zod.infer<typeof checkoutFormValidationSchema>

type CheckoutFormData = CheckoutData

export function CheckoutPage() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  const navigate = useNavigate()
  const { cleanCart } = useContext(CartContext)

  function handleOrderCheckout(data: CheckoutFormData) {
    navigate('/success', { state: data })
    cleanCart()
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutForm
        className="container"
        onSubmit={handleSubmit(handleOrderCheckout)}
      >
        <OrderInfo />
        <SelectedProducts />
      </CheckoutForm>
    </FormProvider>
  )
}
