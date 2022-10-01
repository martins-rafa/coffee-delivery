import { ReactNode } from 'react'
import { Paragraph } from '../../../../components/Typography'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function FormSectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <Paragraph color="subtitle">{title}</Paragraph>
        <Paragraph size="s">{subtitle}</Paragraph>
      </div>
    </SectionTitleContainer>
  )
}
