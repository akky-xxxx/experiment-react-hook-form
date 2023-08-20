import { useController } from "react-hook-form"

import type {
  UseControllerProps,
  FieldValues,
  RegisterOptions,
  FieldPath,
} from "react-hook-form"

type SelectProps<FormValues extends FieldValues> = UseControllerProps<FormValues> & {
  options: number[]
  isDisabled?: boolean
  placeholder: string
  rules?: Omit<
    RegisterOptions<FormValues, FieldPath<FormValues>>,
    "disabled" | "setValueAs" | "valueAsDate" | "valueAsNumber"
  >
}

export const Select = <FormValues extends FieldValues>(props: SelectProps<FormValues>) => {
  const { control, isDisabled, name, options, placeholder, rules } = props
  const { field } = useController({
    control,
    name,
    rules,
  })
  return (
    <select {...field} disabled={isDisabled}>
      <option value="">{placeholder}</option>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
