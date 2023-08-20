import { useController } from "react-hook-form"

import type {
  UseControllerProps,
  FieldValues,
  RegisterOptions,
  FieldPath,
} from "react-hook-form"

type SelectProps<T extends FieldValues> = UseControllerProps<T> & {
  options: number[]
  isDisabled?: boolean
  placeholder: string
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    "disabled" | "setValueAs" | "valueAsDate" | "valueAsNumber"
  >
}

export const Select = <T extends FieldValues>(props: SelectProps<T>) => {
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
