import type { ZodType } from "zod"

const FirstError = 0

export const validateBySchema = (schema: ZodType) => (value: unknown) => {
  const result = schema.safeParse(value)
  return result.success ? true : result.error.formErrors.formErrors[FirstError]
}
