import { useFormState } from "react-hook-form"
import { z } from "zod"

import type { Control, FieldValues } from "react-hook-form"

type Props<FormValues extends FieldValues> = {
  control: Control<FormValues>
}

export const useNameFields = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control } = props
  const { errors } = useFormState({ control })
  // TODO: errorProperty を共通 schema として定義する
  const errorProperty = z
    .object({
      message: z.string().optional(),
    })
    .optional()
  const parsedErrors = z
    .object({
      name: z
        .object({
          firstName: errorProperty,
          lastName: errorProperty,
        })
        .optional(),
    })
    .parse(errors)

  return { parsedErrors }
}
