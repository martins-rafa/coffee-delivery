import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Title } from '../../../../components/Typography'
import { FormSectionTitle } from '../FormSectionTitle'
import { AddressForm } from './components/AddressForm'
import { PaymentOptions } from './components/PaymentOptions'
import { FormSectionContainer, OrderInfoContainer } from './styles'

export function OrderInfo() {
  const { colors } = useTheme()
  return (
    <OrderInfoContainer>
      <Title size="xs" color="subtitle" as="h2">
        Complete your order
      </Title>

      <FormSectionContainer>
        <FormSectionTitle
          title="Address"
          subtitle="Enter the address you wish to receive your order"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <FormSectionTitle
          title="Payment"
          subtitle="You pay when your coffee arrives, select the payment method"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />

        <PaymentOptions />
      </FormSectionContainer>
    </OrderInfoContainer>
  )
}
