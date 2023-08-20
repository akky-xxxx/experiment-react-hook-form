import type { FieldValue, FieldValues, Validate } from "react-hook-form"

export type Validator<V extends FieldValues> = Validate<FieldValue<V>, V>
