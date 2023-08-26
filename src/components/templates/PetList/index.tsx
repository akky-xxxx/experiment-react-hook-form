"use client"

import { PetListView } from "./View"
import { usePetListTemplate } from "./modules/usePetListTemplate"

import type { FC } from "react"

export const PetListTemplate: FC = () => {
  const dependencies = usePetListTemplate()

  return <PetListView {...dependencies} />
}
