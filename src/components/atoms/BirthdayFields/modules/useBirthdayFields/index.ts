import { getDaysInMonth } from "date-fns"
import { useMemo } from "react"
import { useFormState, useWatch } from "react-hook-form"
import { z } from "zod"

import type { Control, FieldPath, FieldValues } from "react-hook-form"

type Names = "nameOfMonth" | "nameOfYear"
type Props<
  FormValues extends FieldValues = FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = Record<Names, FormNames> & {
  control: Control<FormValues>
}

export const useBirthdayFields = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control, nameOfMonth, nameOfYear } = props
  const [yearValue, monthValue] = useWatch({
    control,
    name: [nameOfYear, nameOfMonth],
  })
  const { errors } = useFormState({ control })
  const errorProperty = z
    .object({
      message: z.string().optional(),
    })
    .optional()
  const parsedErrors = z
    .object({
      birthday: z
        .object({
          date: errorProperty,
          month: errorProperty,
          year: errorProperty,
        })
        .optional(),
    })
    .parse(errors)
  const isMonthEnable = Boolean(yearValue)
  const isDateEnable = Boolean(monthValue)

  const dates = useMemo(() => {
    const daysInMonth = getDaysInMonth(
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      new Date(Number(yearValue), Number(monthValue) - 1),
    )
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return Array.from({ length: daysInMonth }, (_, index) => index + 1)
  }, [yearValue, monthValue])

  return {
    dates,
    isDateEnable,
    isMonthEnable,
    parsedErrors,
  }
}
