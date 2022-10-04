import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodContainer, LabelContainer } from './styles'

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon: ReactNode
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodProps
>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <LabelContainer>
          {icon}
          {label}
        </LabelContainer>
      </label>
    </PaymentMethodContainer>
  )
})
