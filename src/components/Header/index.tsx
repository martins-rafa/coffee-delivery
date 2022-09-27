import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="" />

        <HeaderButtonsContainer>
          <HeaderButton className="purple">
            <MapPin size={20} weight="fill" />
            Rio de Janeiro, RJ
          </HeaderButton>

          <HeaderButton className="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
