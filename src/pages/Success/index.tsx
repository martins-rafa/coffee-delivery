import { Paragraph, Title } from '../../components/Typography'
import { DetailsContainer, SuccessPageContainer } from './styles'

import SuccessIllustration from '../../assets/Success-Illustration.png'
import { Info } from '../../components/Info'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckoutData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/OrderInfo/components/PaymentOptions'
import { useEffect } from 'react'

interface LocationType {
  state: CheckoutData
}

export function SuccessPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <SuccessPageContainer className="container">
      <div>
        <Title size="l">Uhu! Order confirmed</Title>
        <Paragraph size="l" color="subtitle">
          Your order will arrive in a few minutes
        </Paragraph>
      </div>

      <section>
        <DetailsContainer>
          <Info
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <Paragraph>
                Delivery at{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.state}
              </Paragraph>
            }
          />

          <Info
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <Paragraph>
                Arrives in
                <br />
                <strong>20 - 30 minutes</strong>
              </Paragraph>
            }
          />

          <Info
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <Paragraph>
                Payment method
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </Paragraph>
            }
          />
        </DetailsContainer>
        <img src={SuccessIllustration} alt="" />
      </section>
    </SuccessPageContainer>
  )
}
