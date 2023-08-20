import { passwordChangeSchema } from "./schemas/passwordChangeSchema"
import { validateBySchema } from "../../../../../shared/utils/validateBySchema"

import type { Validator } from "../../../../../shared/types/Validator"
import type { Password } from "../../types/Password"

const validateConfirmationPassword: Validator<Password> = (
  value,
  formValues,
) => {
  const isValidAsSchema = validateBySchema(
    passwordChangeSchema.confirmationPassword,
  )(value)
  if (typeof isValidAsSchema === "string") return isValidAsSchema

  return (
    formValues.newPassword === value ||
    'Diff password between "New password" and "Confirmation"'
  )
}

const validateCurrentPassword: Validator<Password> = validateBySchema(
  passwordChangeSchema.currentPassword,
)

const validateNewPassword: Validator<Password> = (value, formValues) => {
  const isValidAsSchema = validateBySchema(passwordChangeSchema.newPassword)(
    value,
  )
  if (typeof isValidAsSchema === "string") return isValidAsSchema

  return (
    formValues.currentPassword !== value ||
    'Same password between "Current password" and "New password"'
  )
}

export const validators: Record<string, Validator<Password>> = {
  validateConfirmationPassword,
  validateCurrentPassword,
  validateNewPassword,
}
