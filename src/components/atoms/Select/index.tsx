import { useController } from "react-hook-form"

import type { UseControllerProps, FieldValues } from "react-hook-form"

type SelectProps<T extends FieldValues> = UseControllerProps<T> & {
  options: number[]
  isDisabled?: boolean
  placeholder: string
}

export const Select = <T extends FieldValues>(props: SelectProps<T>) => {
  const { control, isDisabled, name, options, placeholder } = props
  const { field } = useController({ control, name })
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
