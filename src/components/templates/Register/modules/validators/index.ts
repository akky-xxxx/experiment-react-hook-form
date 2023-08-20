import { registerSchema } from "../../../../../shared/schemas/registerSchema"
import { validateBySchema } from "../../../../../shared/utils/validateBySchema"

import type { Validator } from "../../../../../shared/types/Validator"
import type { Register } from "../../types/Register"

const validateBirthdayDate: Validator<Register> = validateBySchema(
  registerSchema.birthday.date,
)
const validateBirthdayMonth: Validator<Register> = validateBySchema(
  registerSchema.birthday.month,
)
const validateBirthdayYear: Validator<Register> = validateBySchema(
  registerSchema.birthday.year,
)
const validateFirstName: Validator<Register> = validateBySchema(
  registerSchema.name.firstName,
)
const validateId: Validator<Register> = validateBySchema(registerSchema.id)
const validateLastName: Validator<Register> = validateBySchema(
  registerSchema.name.lastName,
)
const validatePassword: Validator<Register> = validateBySchema(
  registerSchema.password,
)

export const validators: Record<string, Validator<Register>> = {
  validateBirthdayDate,
  validateBirthdayMonth,
  validateBirthdayYear,
  validateFirstName,
  validateId,
  validateLastName,
  validatePassword,
}
