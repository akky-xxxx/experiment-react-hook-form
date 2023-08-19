import { BirthdayFields } from "../../atoms/BirthdayFields"
import { NameFields } from "../../atoms/NameFields"
import { Text } from "../../atoms/Text"

import type { Register } from "./types/Register"
import type { FC, FormEventHandler } from "react"
import type { UseFormRegister, Control } from "react-hook-form"

type Props = {
  control: Control<Register>
  dates: number[]
  handleSubmit: FormEventHandler
  isDateEnable: boolean
  isMonthEnable: boolean
  register: UseFormRegister<Register>
}

export const RegisterView: FC<Props> = (props) => {
  const {
    control,
    dates,
    handleSubmit,
    isDateEnable,
    isMonthEnable,
    register,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Input ID and Password.</legend>

        <div>
          <Text labelText="ID" name="id" register={register} />
        </div>

        <div>
          <Text
            labelText="Password"
            name="password"
            register={register}
            type="password"
          />
        </div>
      </fieldset>

      <NameFields fieldMessage="Input your name." register={register} />

      <BirthdayFields
        control={control}
        dates={dates}
        fieldMessage="Select your birthday."
        isDateEnable={isDateEnable}
        isMonthEnable={isMonthEnable}
      />

      <button type="submit">Confirm</button>
    </form>
  )
}
