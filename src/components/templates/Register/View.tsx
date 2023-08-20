import { validators } from "./modules/validators"
import { BirthdayFields } from "../../atoms/BirthdayFields"
import { ErrorMessage } from "../../atoms/ErrorMessage"
import { NameFields } from "../../atoms/NameFields"
import { Text } from "../../atoms/Text"

import type { Register } from "./types/Register"
import type { FC, FormEventHandler } from "react"
import type { FieldErrors, UseFormRegister, Control } from "react-hook-form"

type Props = {
  control: Control<Register>
  dates: number[]
  errors: FieldErrors<Register>
  handleSubmit: FormEventHandler
  isDateEnable: boolean
  isMonthEnable: boolean
  register: UseFormRegister<Register>
}

export const RegisterView: FC<Props> = (props) => {
  const {
    control,
    dates,
    errors,
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
          <Text<Register>
            labelText="ID"
            name="id"
            register={register}
            validate={validators.validateId}
          />
          <ErrorMessage errorMessage={errors.id?.message} />
        </div>

        <div>
          <Text<Register>
            labelText="Password"
            name="password"
            register={register}
            type="password"
            validate={validators.validatePassword}
          />
          <ErrorMessage errorMessage={errors.password?.message} />
        </div>
      </fieldset>

      <NameFields
        fieldMessage="Input your name."
        names={{ firstName: "name.firstName", lastName: "name.lastName" }}
        register={register}
        validateFirstName={validators.validateFirstName}
        validateLastName={validators.validateLastName}
        errorMessages={{
          firstName: errors.name?.firstName?.message,
          lastName: errors.name?.lastName?.message,
        }}
      />

      <BirthdayFields<Register>
        control={control}
        dates={dates}
        fieldMessage="Select your birthday."
        isDateEnable={isDateEnable}
        isMonthEnable={isMonthEnable}
        validateBirthdayDate={validators.validateBirthdayDate}
        validateBirthdayMonth={validators.validateBirthdayMonth}
        validateBirthdayYear={validators.validateBirthdayYear}
        errorMessages={{
          date: errors.birthday?.date?.message,
          month: errors.birthday?.month?.message,
          year: errors.birthday?.year?.message,
        }}
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
