import { passwordSchema } from "../passwordSchema"

import type { Password } from "../../../components/templates/Password/types/Password"
import type { ZodString } from "zod"

export const passwordChangeSchema = {
  confirmationPassword: passwordSchema,
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
} satisfies Record<keyof Password, ZodString>
