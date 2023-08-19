import { zodResolver } from "@hookform/resolvers/zod"
import { getDaysInMonth } from "date-fns"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

import { subscribeMonth } from "./modules/subscribeMonth"
import { subscribeYear } from "./modules/subscribeYear"
import { registerSchema } from "../../../../../shared/schemas/registerSchema"

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
    getValues,
    register,
    handleSubmit,
    watch,
    setValue,
    control,
  } = useForm<Register>({ resolver: zodResolver(registerSchema) })
  const [yearValue, monthValue] = getValues(["birthday.year", "birthday.month"])
  const isMonthEnable = Boolean(yearValue)
  const isDateEnable = Boolean(monthValue)

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

  const dates = useMemo(() => {
    const daysInMonth = getDaysInMonth(
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      new Date(Number(yearValue), Number(monthValue) - 1),
    )
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return Array.from({ length: daysInMonth }, (_, index) => index + 1)
  }, [yearValue, monthValue])

  return {
    control,
    dates,
    errors,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit(handleSubmitMain),
    isDateEnable,
    isMonthEnable,
    register,
  }
}
