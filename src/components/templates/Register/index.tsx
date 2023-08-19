"use client"

import { RegisterView } from "./View"
import { useRegisterTemplate } from "./modules/useRegisterTemplate"

import type { FC } from "react"

export const RegisterTemplate: FC = () => {
  const {
    control,
    dates,
    errors,
    handleSubmit,
    isDateEnable,
    isMonthEnable,
    register,
  } = useRegisterTemplate()

  return (
    <RegisterView
      control={control}
      dates={dates}
      errors={errors}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      handleSubmit={handleSubmit}
      isDateEnable={isDateEnable}
      isMonthEnable={isMonthEnable}
      register={register}
    />
  )
}
