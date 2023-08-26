import Cookies from "js-cookie"
import { useEffect } from "react"

import { handleClickIncorrectCookie } from "./modules/handleClickIncorrectCookie"
import { handleResetCookie } from "./modules/handleResetCookie"
import { CookieKeys } from "../../../../../shared/const/CookieKeys"
import { useNoResolverForm } from "../../../../../shared/utils/useNoResolverForm"

import type { TriggerView } from "../../View"
import type { Form } from "../../types"
import type { ComponentProps } from "react"
import type { SubmitHandler } from "react-hook-form"

type Props = {
  testValue?: string
}
type UseTriggerTemplateReturn = ComponentProps<typeof TriggerView>

type UseTriggerTemplate = (props: Props) => UseTriggerTemplateReturn

export const useTriggerTemplate: UseTriggerTemplate = (props) => {
  const { testValue } = props
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    trigger,
    reset,
  } = useNoResolverForm<Form>({
    defaultValues: {
      input: testValue ?? "",
    },
  })
  useEffect(() => {
    if (testValue) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      trigger("input")
    }
  }, [testValue, trigger])

  const errorMessage = errors.input?.message || ""
  const enableSave = isValid && isDirty

  const handleSubmitMain: SubmitHandler<Form> = (data) => {
    const { input } = data
    Cookies.set(CookieKeys.TEST_VALUE, input)
    reset({ input })
  }

  return {
    enableSave,
    errorMessage,
    handleClickIncorrectCookie,
    handleResetCookie,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit(handleSubmitMain),
    register,
  }
}
