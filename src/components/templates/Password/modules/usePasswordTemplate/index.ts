import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { passwordChangeSchema } from "../../../../../shared/schemas/passwordChangeSchema"

import type { Password } from "../../types/Password"
import type { SubmitHandler } from "react-hook-form"

export const usePasswordTemplate = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Password>({ resolver: zodResolver(passwordChangeSchema) })

  const handleSubmitMain: SubmitHandler<Password> = (data) => {
    const { confirmationPassword, currentPassword, newPassword } = data

    if (currentPassword === newPassword) {
      setError("newPassword", {
        message: "same current",
      })
    }

    if (confirmationPassword !== newPassword) {
      setError("confirmationPassword", {
        message: "diff confirmation",
      })
    }
  }

  return {
    errors,
    handleSubmit: handleSubmit(handleSubmitMain),
    register,
  }
}
