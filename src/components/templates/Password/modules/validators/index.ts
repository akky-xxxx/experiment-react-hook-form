import { passwordChangeSchema } from "../../../../../shared/schemas/passwordChangeSchema"
import { validateBySchema } from "../../../../../shared/utils/validateBySchema"

import type { Validator } from "../../../../../shared/types/Validator"
import type { Password } from "../../types/Password"

const validateConfirmationPassword: Validator<Password> = (
  value,
  formValues,
) => {
  if (formValues.newPassword !== value)
    return 'Diff password between "New password" and "Confirmation"'

  return validateBySchema(passwordChangeSchema.confirmationPassword)(value)
}

const validateCurrentPassword: Validator<Password> = validateBySchema(
  passwordChangeSchema.currentPassword,
)

const validateNewPassword: Validator<Password> = (value, formValues) => {
  if (formValues.currentPassword === value)
    return 'Same password between "Current password" and "New password"'
  return validateBySchema(passwordChangeSchema.newPassword)(value)
}

export const validators: Record<string, Validator<Password>> = {
  validateConfirmationPassword,
  validateCurrentPassword,
  validateNewPassword,
}
