"use client"

import { PasswordView } from "./View"
import { usePasswordTemplate } from "./modules/usePasswordTemplate"

export const PasswordTemplate = () => {
  const dependencies = usePasswordTemplate()

  return <PasswordView {...dependencies} />
}
