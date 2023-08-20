import { passwordSchema } from "../../../../../../../shared/schemas/passwordSchema"

import type { Password } from "../../../../types/Password"
import type { ZodString } from "zod"

export const passwordChangeSchema = {
  confirmationPassword: passwordSchema,
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
} satisfies Record<keyof Password, ZodString>
