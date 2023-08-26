import { useFieldArray, useForm } from "react-hook-form"

import type { PetListView } from "../../View"
import type { PetList } from "../../types"
import type { ComponentProps } from "react"

type UsePetListTemplateReturn = ComponentProps<typeof PetListView>

const PositionNextTo = 1

export const usePetListTemplate = (): UsePetListTemplateReturn => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PetList>()
  const { fields, append, swap, remove } = useFieldArray({
    control,
    name: "petList",
  })

  const handleClickAddRecord = () => {
    append({ name: "" })
  }
  const handleClickMoveToBefore = (index: number) => () => {
    swap(index, index - PositionNextTo)
  }
  const handleClickMoveToAfter = (index: number) => () => {
    swap(index, index + PositionNextTo)
  }
  const handleClickRemoveRecord = (index: number) => () => {
    remove(index)
  }

  return {
    control,
    errors,
    fields,
    handleClickAddRecord,
    handleClickMoveToAfter,
    handleClickMoveToBefore,
    handleClickRemoveRecord,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleSubmit: handleSubmit((data) => {
      // eslint-disable-next-line no-console
      console.log(data)
    }),
  }
}
