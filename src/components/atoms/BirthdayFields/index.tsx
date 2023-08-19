import { Select } from "../Select"

import type { Control, FieldPath, FieldValues } from "react-hook-form"

/* eslint-disable @typescript-eslint/no-magic-numbers */
const Years = Array.from({ length: 100 }, (_, index) => index + 1950)
const Month = Array.from({ length: 12 }, (_, index) => index + 1)
/* eslint-enable @typescript-eslint/no-magic-numbers */

type Props<
  F extends FieldValues = FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = {
  control: Control<F>
  dates: number[]
  fieldMessage: string
  isDateEnable: boolean
  isMonthEnable: boolean
  names: Record<"date" | "month" | "year", N>
}

export const BirthdayFields = <F extends FieldValues>(props: Props<F>) => {
  const {
    control,
    dates,
    fieldMessage,
    isDateEnable,
    isMonthEnable,
    names: { date, month, year },
  } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>
      <Select
        control={control}
        name={year}
        options={Years}
        placeholder="Year"
      />
      /
      <Select
        control={control}
        isDisabled={!isMonthEnable}
        name={month}
        options={Month}
        placeholder="Month"
      />
      /
      <Select
        control={control}
        isDisabled={!isDateEnable}
        name={date}
        options={dates}
        placeholder="Date"
      />
    </fieldset>
  )
}
