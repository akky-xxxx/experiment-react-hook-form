import type { InputHTMLAttributes } from "react"
import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form"

type Props<F extends FieldValues> = {
  name: FieldPath<F>
  labelText: string
  register: UseFormRegister<F>
  type?: InputHTMLAttributes<"HTMLAttributes">["type"]
}

export const Text = <F extends FieldValues>(props: Props<F>) => {
  const { name, labelText, register, type } = props

  return (
    <label>
      <span>{labelText}：</span>
      <input {...register(name, { required: true })} type={type || "text"} />
    </label>
  )
}
