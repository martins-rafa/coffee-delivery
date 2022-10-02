import { Paragraph, Title } from '../../components/Typography'
import { DetailsContainer, SuccessPageContainer } from './styles'

import SuccessIllustration from '../../assets/Success-Illustration.png'
import { Info } from '../../components/Info'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function SuccessPage() {
  const { colors } = useTheme()
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
                Delivery at <strong>Example Street, 96</strong>
                <br />
                Copacabana - Rio de Janeiro, RJ
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
                <strong>Credit Card</strong>
              </Paragraph>
            }
          />
        </DetailsContainer>
        <img src={SuccessIllustration} alt="" />
      </section>
    </SuccessPageContainer>
  )
}
