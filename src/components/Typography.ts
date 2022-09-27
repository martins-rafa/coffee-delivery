import styled from 'styled-components'

interface TitleProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  color?: 'text' | 'subtitle' | 'title'
  weight?: 700 | 800
}

interface ParagraphProps {
  size?: 'l' | 'm' | 's'
  color?: 'text' | 'subtitle' | 'label'
  weight?: 400 | 700
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
