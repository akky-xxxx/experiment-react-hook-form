import { z } from "zod"

import { passwordSchema } from "../passwordSchema"

import type { Register } from "../../../components/templates/Register/types/Register"
import type { ZodString } from "zod"

type NameSchemaType = Record<keyof Register["name"], ZodString>
type BirthdaySchemaType = Record<keyof Register["birthday"], ZodString>

export const registerSchema = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  birthday: {
    date: z.string().min(1).max(2),
    month: z.string().min(1).max(2),
    year: z.string().min(4).max(4),
  } satisfies BirthdaySchemaType,
  id: z.string().min(8, "Password must contain at least 8 characters"),
  name: {
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
  } satisfies NameSchemaType,
  password: passwordSchema,
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} satisfies Record<
  keyof Register,
  BirthdaySchemaType | NameSchemaType | ZodString
>
