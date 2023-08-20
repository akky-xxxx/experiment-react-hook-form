import { ErrorMessage } from "../ErrorMessage"
import { Text } from "../Text"

import type {
  FieldPath,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form"

type validators = "validateFirstName" | "validateLastName"

type Props<
  F extends FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Record<validators, RegisterOptions<F>["validate"]> & {
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
    validateFirstName,
    validateLastName,
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text
        labelText="First name"
        name={firstName}
        register={register}
        validate={validateFirstName}
      />
      <ErrorMessage errorMessage={errorMessages.firstName} />
      <Text
        labelText="Last name"
        name={lastName}
        register={register}
        validate={validateLastName}
      />
      <ErrorMessage errorMessage={errorMessages.lastName} />
    </fieldset>
  )
}
