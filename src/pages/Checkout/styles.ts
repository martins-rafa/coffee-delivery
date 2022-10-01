import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
`
export const FormSectionStyle = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 4px;
  padding: 2.5rem;
`
