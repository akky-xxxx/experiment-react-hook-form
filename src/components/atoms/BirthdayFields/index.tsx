import { Select } from "../Select"

import type { Register } from "../../templates/Register/types/Register"
import type { FC } from "react"
import type { Control } from "react-hook-form"

/* eslint-disable @typescript-eslint/no-magic-numbers */
const Years = Array.from({ length: 100 }, (_, index) => index + 1950)
const Month = Array.from({ length: 12 }, (_, index) => index + 1)
/* eslint-enable @typescript-eslint/no-magic-numbers */

type Props = {
  control: Control<Register>
  dates: number[]
  fieldMessage: string
  isDateEnable: boolean
  isMonthEnable: boolean
}

export const BirthdayFields: FC<Props> = (props) => {
  const { control, dates, fieldMessage, isDateEnable, isMonthEnable } = props

  return (
    <fieldset>
      <legend>{fieldMessage}</legend>
      <Select
        control={control}
        name="birthday.year"
        options={Years}
        placeholder="Year"
      />
      /
      <Select
        control={control}
        isDisabled={!isMonthEnable}
        name="birthday.month"
        options={Month}
        placeholder="Month"
      />
      /
      <Select
        control={control}
        isDisabled={!isDateEnable}
        name="birthday.date"
        options={dates}
        placeholder="Date"
      />
    </fieldset>
  )
}
