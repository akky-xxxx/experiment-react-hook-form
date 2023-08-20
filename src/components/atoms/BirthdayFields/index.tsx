import { useBirthdayFields } from "./modules/useBirthdayFields"
import { ErrorMessage } from "../ErrorMessage"
import { Select } from "../Select"

import type {
  RegisterOptions,
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form"

/* eslint-disable @typescript-eslint/no-magic-numbers */
const Years = Array.from({ length: 100 }, (_, index) => index + 1950)
const Month = Array.from({ length: 12 }, (_, index) => index + 1)
/* eslint-enable @typescript-eslint/no-magic-numbers */

type Validators =
  | "validateBirthdayDate"
  | "validateBirthdayMonth"
  | "validateBirthdayYear"
type Names = "nameOfDate" | "nameOfMonth" | "nameOfYear"

type Props<
  FormValues extends FieldValues = FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = Record<Names, FormNames> &
  Record<Validators, RegisterOptions<FormValues>["validate"]> & {
    control: Control<FormValues>
    fieldMessage: string
  }

export const BirthdayFields = <FormValues extends FieldValues>(props: Props<FormValues>) => {
  const {
    control,
    fieldMessage,
    nameOfDate,
    nameOfMonth,
    nameOfYear,
    validateBirthdayDate,
    validateBirthdayMonth,
    validateBirthdayYear,
  } = props
  const { dates, isDateEnable, isMonthEnable, parsedErrors } =
    useBirthdayFields({ control, nameOfMonth, nameOfYear })

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>
      <Select
        control={control}
        name={nameOfYear}
        options={Years}
        placeholder="Year"
        rules={{
          validate: validateBirthdayDate,
        }}
      />
      /
      <Select
        control={control}
        isDisabled={!isMonthEnable}
        name={nameOfMonth}
        options={Month}
        placeholder="Month"
        rules={{
          validate: validateBirthdayMonth,
        }}
      />
      /
      <Select
        control={control}
        isDisabled={!isDateEnable}
        name={nameOfDate}
        options={dates}
        placeholder="Date"
        rules={{
          validate: validateBirthdayYear,
        }}
      />
      <ErrorMessage errorMessage={parsedErrors.birthday?.year?.message} />
      <ErrorMessage errorMessage={parsedErrors.birthday?.month?.message} />
      <ErrorMessage errorMessage={parsedErrors.birthday?.date?.message} />
    </fieldset>
  )
}
