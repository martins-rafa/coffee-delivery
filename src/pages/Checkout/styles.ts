import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 1079px) {
    flex-direction: column;
  }
`
export const FormSectionStyle = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 4px;
  padding: 2.5rem;
`
