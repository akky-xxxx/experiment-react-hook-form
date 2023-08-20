import { z } from "zod"

import { passwordSchema } from "../../../../../../../shared/schemas/passwordSchema"

import type { Register } from "../../../../types/Register"
import type { ZodString, ZodEffects } from "zod"

type NameSchemaType = Record<keyof Register["name"], ZodString>
type BirthdaySchemaType = Record<
  keyof Register["birthday"],
  ZodEffects<ZodString, number, string>
>

export const registerSchema = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  birthday: {
    date: z.string().min(1).max(2).transform(Number),
    month: z.string().min(1).max(2).transform(Number),
    year: z.string().min(4).max(4).transform(Number),
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
