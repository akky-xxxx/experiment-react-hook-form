import type { InputHTMLAttributes } from "react"
import type {
  FieldPath,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form"

type Props<
  FormValues extends FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = Partial<RegisterOptions<FormValues, FormNames>> & {
  name: FormNames
  labelText: string
  register: UseFormRegister<FormValues>
  type?: InputHTMLAttributes<"HTMLAttributes">["type"]
  validate?: RegisterOptions<FormValues>["validate"]
}

export const Text = <FormValues extends FieldValues>(props: Props<FormValues>) => {
  const { name, labelText, register, type, ...registerOptions } = props

  return (
    <label>
      <span>{labelText}：</span>
      <input {...register(name, registerOptions)} type={type || "text"} />
    </label>
  )
}
