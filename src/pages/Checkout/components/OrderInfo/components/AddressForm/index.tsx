import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../../../components/Input'
import { AddressFormContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Street"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Number"
        type="number"
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complement"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder="District"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="City"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="State"
        {...register('state')}
        error={errors.state?.message}
      />
    </AddressFormContainer>
  )
}
