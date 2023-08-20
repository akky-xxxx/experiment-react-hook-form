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
  FormValues extends FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = Record<Names, FormNames> &
  Record<Validators, RegisterOptions<FormValues>["validate"]> & {
    control: Control<FormValues>
    fieldMessage: string
    register: UseFormRegister<FormValues>
  }

export const NameFields = <FormValues extends FieldValues>(props: Props<FormValues>) => {
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
