import { Text } from "../Text"

import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form"

type Props<F extends FieldValues, N extends FieldPath<F> = FieldPath<F>> = {
  fieldMessage: string
  names: Record<"firstName" | "lastName", N>
  register: UseFormRegister<F>
}

export const NameFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    fieldMessage,
    names: { firstName, lastName },
    register,
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text labelText="First name" name={firstName} register={register} />
      <Text labelText="Last name" name={lastName} register={register} />
    </fieldset>
  )
}
