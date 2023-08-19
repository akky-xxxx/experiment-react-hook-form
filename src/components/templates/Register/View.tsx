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
          <Text<Register> labelText="ID" name="id" register={register} />
        </div>

        <div>
          <Text<Register>
            labelText="Password"
            name="password"
            register={register}
            type="password"
          />
        </div>
      </fieldset>

      <NameFields
        fieldMessage="Input your name."
        names={{ firstName: "name.firstName", lastName: "name.lastName" }}
        register={register}
      />

      <BirthdayFields<Register>
        control={control}
        dates={dates}
        fieldMessage="Select your birthday."
        isDateEnable={isDateEnable}
        isMonthEnable={isMonthEnable}
        names={{
          date: "birthday.date",
          month: "birthday.month",
          year: "birthday.year",
        }}
      />

      <button type="submit">Confirm</button>
    </form>
  )
}
