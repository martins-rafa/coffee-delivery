import { Button } from '../../../../../../components/Button'
import { Paragraph } from '../../../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <Paragraph size="s">Products Total</Paragraph>
        <Paragraph>$ 19.80</Paragraph>
      </div>

      <div>
        <Paragraph size="s">Delivery</Paragraph>
        <Paragraph>$ 3.49</Paragraph>
      </div>

      <div>
        <Paragraph weight={700} color="subtitle" size="l">
          Total
        </Paragraph>
        <Paragraph weight={700} color="subtitle" size="l">
          $ 23.29
        </Paragraph>
      </div>

      <Button text="Confirm Order" />
    </ConfirmationSectionContainer>
  )
}
