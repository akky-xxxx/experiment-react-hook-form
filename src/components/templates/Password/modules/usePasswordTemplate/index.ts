import { useResolvedForm } from "../../../../../shared/utils/useResolvedForm"

import type { PasswordView } from "../../View"
import type { Password } from "../../types/Password"
import type { ComponentProps } from "react"
import type { SubmitHandler } from "react-hook-form"

const handleSubmitMain: SubmitHandler<Password> = (data) => {
  // eslint-disable-next-line no-console
  console.log(data)
}

type UsePasswordTemplateReturn = ComponentProps<typeof PasswordView>

export const usePasswordTemplate = (): UsePasswordTemplateReturn => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useResolvedForm<Password>()

  return {
    errors,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit(handleSubmitMain),
    register,
  }
}
