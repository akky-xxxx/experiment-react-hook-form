import { useNameFields } from "./modules/useNameFields"
import { ErrorMessage } from "../ErrorMessage"
import { Text } from "../Text"

import type {
  FieldPath,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  Control,
} from "react-hook-form"

type Validators = "validateFirstName" | "validateLastName"
type Names = "nameOfFirstName" | "nameOfLastName"

type Props<
  F extends FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Record<Names, N> &
  Record<Validators, RegisterOptions<F>["validate"]> & {
    control: Control<F>
    fieldMessage: string
    register: UseFormRegister<F>
  }

export const NameFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    control,
    fieldMessage,
    nameOfFirstName,
    nameOfLastName,
    register,
    validateFirstName,
    validateLastName,
  } = props
  const { parsedErrors } = useNameFields({ control })

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text
        labelText="First name"
        name={nameOfFirstName}
        register={register}
        validate={validateFirstName}
      />
      <ErrorMessage errorMessage={parsedErrors.name?.firstName?.message} />
      <Text
        labelText="Last name"
        name={nameOfLastName}
        register={register}
        validate={validateLastName}
      />
      <ErrorMessage errorMessage={parsedErrors.name?.lastName?.message} />
    </fieldset>
  )
}
