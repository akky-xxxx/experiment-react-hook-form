import { Text } from "../Text"

import type { Register } from "../../templates/Register/types/Register"
import type { FC } from "react"
import type { UseFormRegister } from "react-hook-form"

type Props = {
  fieldMessage: string
  register: UseFormRegister<Register>
}

export const NameFields: FC<Props> = (props) => {
  const { fieldMessage, register } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>

      <Text labelText="First name" name="name.firstName" register={register} />
      <Text labelText="Last name" name="name.lastName" register={register} />
    </fieldset>
  )
}
