import type { InputHTMLAttributes } from "react"
import type {
  FieldPath,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form"

type Props<
  F extends FieldValues,
  N extends FieldPath<F> = FieldPath<F>,
> = Partial<RegisterOptions<F, N>> & {
  name: N
  labelText: string
  register: UseFormRegister<F>
  type?: InputHTMLAttributes<"HTMLAttributes">["type"]
  validate?: RegisterOptions<F>["validate"]
}

export const Text = <F extends FieldValues>(props: Props<F>) => {
  const { name, labelText, register, type, ...registerOptions } = props

  return (
    <label>
      <span>{labelText}：</span>
      <input {...register(name, registerOptions)} type={type || "text"} />
    </label>
  )
}
