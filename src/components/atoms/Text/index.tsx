import type { Register } from "../../templates/Register/types/Register"
import type { FC, InputHTMLAttributes } from "react"
import type { FieldPath, UseFormRegister } from "react-hook-form"

type Props = {
  name: FieldPath<Register>
  labelText: string
  register: UseFormRegister<Register>
  type?: InputHTMLAttributes<"HTMLAttributes">["type"]
}

export const Text: FC<Props> = (props) => {
  const { name, labelText, register, type } = props

  return (
    <label>
      <span>{labelText}：</span>
      <input {...register(name, { required: true })} type={type || "text"} />
    </label>
  )
}
