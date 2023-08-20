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

type Props<
  F extends FieldValues = FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Record<Validators, RegisterOptions<F>["validate"]> & {
  control: Control<F>
  dates: number[]
  errorMessages: Partial<Record<"date" | "month" | "year", string>>
  fieldMessage: string
  isDateEnable: boolean
  isMonthEnable: boolean
  names: Record<"date" | "month" | "year", N>
}

export const BirthdayFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    control,
    dates,
    errorMessages,
    fieldMessage,
    isDateEnable,
    isMonthEnable,
    names: { date, month, year },
    validateBirthdayDate,
    validateBirthdayMonth,
    validateBirthdayYear,
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>
      <Select
        control={control}
        name={year}
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
        name={month}
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
        name={date}
        options={dates}
        placeholder="Date"
        rules={{
          validate: validateBirthdayYear,
        }}
      />
      <ErrorMessage errorMessage={errorMessages.year} />
      <ErrorMessage errorMessage={errorMessages.month} />
      <ErrorMessage errorMessage={errorMessages.date} />
    </fieldset>
  )
}
