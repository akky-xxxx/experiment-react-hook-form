"use client"

import { PasswordView } from "./View"
import { usePasswordTemplate } from "./modules/usePasswordTemplate"

export const PasswordTemplate = () => {
  const { handleSubmit, register, errors } = usePasswordTemplate()

  return (
    <PasswordView
      errors={errors}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      handleSubmit={handleSubmit}
      register={register}
    />
  )
}
