import { getDaysInMonth } from "date-fns"
import { useMemo } from "react"

import { subscribeMonth } from "./modules/subscribeMonth"
import { subscribeYear } from "./modules/subscribeYear"
import { useResolvedForm } from "../../../../../shared/utils/useResolvedForm"

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
  } = useResolvedForm<Register>()
  const [yearValue, monthValue] = getValues(["birthday.year", "birthday.month"])

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
    register,
  }
}
