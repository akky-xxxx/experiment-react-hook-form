import { ErrorMessage } from "../ErrorMessage"
import { Text } from "../Text"

import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form"

type Props<F extends FieldValues, N extends FieldPath<F> = FieldPath<F>> = {
  fieldMessage: string
  errorMessages: Partial<Record<"firstName" | "lastName", string>>
  names: Record<"firstName" | "lastName", N>
  register: UseFormRegister<F>
}

export const NameFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    errorMessages,
    fieldMessage,
    names: { firstName, lastName },
    register,
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text labelText="First name" name={firstName} register={register} />
      <ErrorMessage errorMessage={errorMessages.firstName} />
      <Text labelText="Last name" name={lastName} register={register} />
      <ErrorMessage errorMessage={errorMessages.lastName} />
    </fieldset>
  )
}
