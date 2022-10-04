import { forwardRef, InputHTMLAttributes } from 'react'
import { Paragraph } from '../Typography'
import { InputContainer, InputStyleContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && <Paragraph size="s">{error}</Paragraph>}
      </InputContainer>
    )
  },
)
