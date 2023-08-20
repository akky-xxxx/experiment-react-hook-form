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
type ErrorMessages = "errorOfDate" | "errorOfMonth" | "errorOfYear"

type Props<
  F extends FieldValues = FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Partial<Record<ErrorMessages, string>> &
  Record<Names, N> &
  Record<Validators, RegisterOptions<F>["validate"]> & {
    control: Control<F>
    dates: number[]
    fieldMessage: string
    isDateEnable: boolean
    isMonthEnable: boolean
  }

export const BirthdayFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    control,
    dates,
    errorOfDate,
    errorOfMonth,
    errorOfYear,
    fieldMessage,
    isDateEnable,
    isMonthEnable,
    nameOfDate,
    nameOfMonth,
    nameOfYear,
    validateBirthdayDate,
    validateBirthdayMonth,
    validateBirthdayYear,
  } = props

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
      <ErrorMessage errorMessage={errorOfYear} />
      <ErrorMessage errorMessage={errorOfMonth} />
      <ErrorMessage errorMessage={errorOfDate} />
    </fieldset>
  )
}
