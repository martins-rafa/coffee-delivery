import { CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Paragraph } from '../../../../../../components/Typography'
import { PaymentMethodInput } from '../../../PaymentMethodInput'
import { PaymentOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <CreditCard size={16} />,
  },
  money: {
    label: 'Money',
    icon: <Money size={16} />,
  },
}

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <Paragraph>{paymentMethodError}</Paragraph>}
    </PaymentOptionsContainer>
  )
}
