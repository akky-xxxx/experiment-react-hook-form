import { z } from "zod"

import { passwordSchema } from "../passwordSchema"

import type { Register } from "../../../components/templates/Register/types/Register"
import type { ZodNumber, ZodObject, ZodString } from "zod"

type NameSchemaType = Record<keyof Register["name"], ZodString>
type BirthdaySchemaType = Record<keyof Register["birthday"], ZodNumber>

export const registerSchema = z.object({
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  birthday: z.object({
    date: z.number().min(1).max(2),
    month: z.number().min(1).max(2),
    year: z.number().min(4).max(4),
  } satisfies BirthdaySchemaType),
  id: z.string().min(8, "Password must contain at least 8 characters"),
  name: z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
  } satisfies NameSchemaType),
  password: passwordSchema,
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} satisfies Record<keyof Register, ZodObject<BirthdaySchemaType | NameSchemaType> | ZodString>)
