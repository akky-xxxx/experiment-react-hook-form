"use client"

import { TriggerView } from "./View"
import { useTriggerTemplate } from "./modules/useTriggerTemplate"

import type { FC } from "react"

type Props = {
  testValue?: string
}

export const TriggerTemplate: FC<Props> = (props) => {
  const dependencies = useTriggerTemplate(props)

  return <TriggerView {...dependencies} />
}
