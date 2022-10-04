import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-input']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
