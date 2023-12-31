import { useFormState } from "react-hook-form"
import { z } from "zod"

import { errorMessageSchema } from "../../../../../shared/schemas/errorMessageSchema"

import type { Control, FieldValues } from "react-hook-form"

type Props<FormValues extends FieldValues> = {
  control: Control<FormValues>
}

export const useNameFields = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control } = props
  const { errors } = useFormState({ control })
  const parsedErrors = z
    .object({
      name: z
        .object({
          firstName: errorMessageSchema,
          lastName: errorMessageSchema,
        })
        .optional(),
    })
    .parse(errors)

  return { parsedErrors }
}
