"use client"

import { RegisterView } from "./View"
import { useRegisterTemplate } from "./modules/useRegisterTemplate"

import type { FC } from "react"

export const RegisterTemplate: FC = () => {
  const dependencies = useRegisterTemplate()

  return <RegisterView {...dependencies} />
}
