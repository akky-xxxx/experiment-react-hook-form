import { z } from "zod"

import { passwordSchema } from "../passwordSchema"

import type { Password } from "../../../components/templates/Password/types/Password"
import type { ZodString } from "zod"

export const passwordChangeSchema = z.object({
  confirmationPassword: passwordSchema,
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
} satisfies Record<keyof Password, ZodString>)
