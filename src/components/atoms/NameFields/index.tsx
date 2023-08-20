import { ErrorMessage } from "../ErrorMessage"
import { Text } from "../Text"

import type {
  FieldPath,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form"

type Validators = "validateFirstName" | "validateLastName"
type Names = "nameOfFirstName" | "nameOfLastName"
type Errors = "errorOfFirstName" | "errorOfLastName"

type Props<
  F extends FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Partial<Record<Errors, string>> &
  Record<Names, N> &
  Record<Validators, RegisterOptions<F>["validate"]> & {
    fieldMessage: string
    register: UseFormRegister<F>
  }

export const NameFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    errorOfFirstName,
    errorOfLastName,
    fieldMessage,
    nameOfFirstName,
    nameOfLastName,
    register,
    validateFirstName,
    validateLastName,
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text
        labelText="First name"
        name={nameOfFirstName}
        register={register}
        validate={validateFirstName}
      />
      <ErrorMessage errorMessage={errorOfFirstName} />
      <Text
        labelText="Last name"
        name={nameOfLastName}
        register={register}
        validate={validateLastName}
      />
      <ErrorMessage errorMessage={errorOfLastName} />
    </fieldset>
  )
}
