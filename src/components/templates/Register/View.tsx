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
  errors: FieldErrors<Register>
  handleSubmit: FormEventHandler
  register: UseFormRegister<Register>
}

export const RegisterView: FC<Props> = (props) => {
  const { control, errors, handleSubmit, register } = props

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
        errorOfFirstName={errors.name?.firstName?.message}
        errorOfLastName={errors.name?.lastName?.message}
        fieldMessage="Input your name."
        nameOfFirstName="name.firstName"
        nameOfLastName="name.lastName"
        register={register}
        validateFirstName={validators.validateFirstName}
        validateLastName={validators.validateLastName}
      />

      <BirthdayFields<Register>
        control={control}
        errorOfDate={errors.birthday?.date?.message}
        errorOfMonth={errors.birthday?.month?.message}
        errorOfYear={errors.birthday?.year?.message}
        fieldMessage="Select your birthday."
        nameOfDate="birthday.date"
        nameOfMonth="birthday.month"
        nameOfYear="birthday.year"
        validateBirthdayDate={validators.validateBirthdayDate}
        validateBirthdayMonth={validators.validateBirthdayMonth}
        validateBirthdayYear={validators.validateBirthdayYear}
      />

      <button type="submit">Confirm</button>
    </form>
  )
}
