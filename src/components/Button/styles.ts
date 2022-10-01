import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  line-height: 130%;

  margin-top: 0.7rem;

  transition: background-color 200ms ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
