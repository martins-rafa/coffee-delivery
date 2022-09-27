import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  ServicePerksContainer,
} from './styles'

import HeroImage from '../../../../assets/Hero-Image.png'
import { Paragraph } from '../../../../components/Typography'
import { Info } from '../../../../components/Info'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Find the perfect coffee for any time of the day
            </HeroTitle>

            <Paragraph size="l" color="subtitle" as="h3">
              With Coffee Delivery you receive your coffee wherever you are, at
              any time.
            </Paragraph>
          </section>

          <ServicePerksContainer>
            <Info
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text="Simple and Safe purchase"
            />

            <Info
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Packaging keeps your coffee intact"
            />

            <Info
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
              text="Fast and Trackable delivery"
            />

            <Info
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
              text="Coffee arrives fresh and hot to you"
            />
          </ServicePerksContainer>
        </div>

        <img src={HeroImage} alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
