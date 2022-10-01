import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton className="purple">
            <MapPin size={20} weight="fill" />
            Rio de Janeiro, RJ
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton className="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
