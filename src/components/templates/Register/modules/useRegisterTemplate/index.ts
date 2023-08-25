import { subscribeMonth } from "./modules/subscribeMonth"
import { subscribeYear } from "./modules/subscribeYear"
import { useNoResolverForm } from "../../../../../shared/utils/useNoResolverForm"

import type { SubscribeArguments } from "../../../../../shared/types/Subscribe"
import type { RegisterView } from "../../View"
import type { Register } from "../../types/Register"
import type { ComponentProps } from "react"
import type { SubmitHandler } from "react-hook-form"

const handleSubmitMain: SubmitHandler<Register> = (data) => {
  // eslint-disable-next-line no-console
  console.log(data)
}

type UseRegisterTemplateReturn = ComponentProps<typeof RegisterView>

export const useRegisterTemplate = (): UseRegisterTemplateReturn => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
  } = useNoResolverForm<Register>()

  watch((formState, { name, type }) => {
    const subscribeArguments: SubscribeArguments<Register> = {
      formState,
      name,
      setValue,
      type,
    }
    subscribeYear(subscribeArguments)
    subscribeMonth(subscribeArguments)
  })

  return {
    control,
    errors,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit(handleSubmitMain),
    register,
  }
}
