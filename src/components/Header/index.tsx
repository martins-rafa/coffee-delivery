import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

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
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
