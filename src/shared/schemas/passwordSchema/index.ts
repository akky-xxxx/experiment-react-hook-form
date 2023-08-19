import { z } from "zod"

const MinimumPasswordLength = 8

export const passwordSchema = z
  .string()
  .min(MinimumPasswordLength, "Password must contain at least 8 characters")
