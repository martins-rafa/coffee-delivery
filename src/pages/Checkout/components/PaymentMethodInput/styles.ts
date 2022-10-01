import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;

  transition: background-color 200ms ease-in-out;

  > svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`
