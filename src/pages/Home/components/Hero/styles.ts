import styled from 'styled-components'

import HeroBackground from '../../../../assets/Hero-Background.png'
import { Title } from '../../../../components/Typography'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${() => `url(${HeroBackground}) no-repeat center`};
  background-size: cover;
`
export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const HeroTitle = styled(Title)`
  margin-bottom: 1rem;
`
export const ServicePerksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 875px) {
    row-gap: 0.5rem;
  }
`
