import { useResolvedForm } from "../../../../../shared/utils/useResolvedForm"

import type { PasswordView } from "../../View"
import type { Password } from "../../types/Password"
import type { ComponentProps } from "react"
import type { SubmitHandler } from "react-hook-form"

type UsePasswordTemplateReturn = ComponentProps<typeof PasswordView>

export const usePasswordTemplate = (): UsePasswordTemplateReturn => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useResolvedForm<Password>()

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
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit(handleSubmitMain),
    register,
  }
}
