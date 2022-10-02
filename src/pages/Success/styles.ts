import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1020px) {
      flex-direction: column;
    }
  }
`

export const DetailsContainer = styled.div`
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  background: linear-gradient(
        ${(props) => props.theme.colors['base-background']},
        ${(props) => props.theme.colors['base-background']}
      )
      padding-box,
    linear-gradient(
        120deg,
        ${(props) => props.theme.colors['brand-yellow']},
        ${(props) => props.theme.colors['brand-purple']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`
