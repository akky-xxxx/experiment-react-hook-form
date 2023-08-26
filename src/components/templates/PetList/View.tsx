import { PetRecord } from "./components/atoms/PetRecord"

import type { PetList } from "./types"
import type { FC, FormEventHandler, MouseEventHandler } from "react"
import type { Control } from "react-hook-form"
import type {
  UseFieldArrayReturn,
  FieldErrors,
} from "react-hook-form/dist/types"

type Props = {
  control: Control<PetList>
  errors: FieldErrors<PetList>
  fields: UseFieldArrayReturn<PetList>["fields"]
  handleClickAddRecord: MouseEventHandler
  handleClickMoveToAfter: (index: number) => MouseEventHandler
  handleClickMoveToBefore: (index: number) => MouseEventHandler
  handleClickRemoveRecord: (index: number) => MouseEventHandler
  handleSubmit: FormEventHandler
}

export const PetListView: FC<Props> = (props) => {
  const {
    control,
    errors,
    fields,
    handleClickAddRecord,
    handleClickMoveToAfter,
    handleClickMoveToBefore,
    handleClickRemoveRecord,
    handleSubmit,
  } = props
  // eslint-disable-next-line no-console
  console.log({ errors })

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {fields.map((field, index) => {
          const { id } = field

          return (
            <PetRecord
              key={id}
              control={control}
              handleClickMoveToAfter={handleClickMoveToAfter}
              handleClickMoveToBefore={handleClickMoveToBefore}
              handleClickRemoveRecord={handleClickRemoveRecord}
              index={index}
            />
          )
        })}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ width: "100%" }}
          type="button"
          onClick={handleClickAddRecord}
        >
          +
        </button>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}
