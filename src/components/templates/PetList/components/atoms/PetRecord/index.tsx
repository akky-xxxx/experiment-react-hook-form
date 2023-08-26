import { PetName } from "./components/atoms/PetName"
import { PetType } from "./components/atoms/PetType"

import type { PetList } from "../../../types"
import type { FC, MouseEventHandler } from "react"
import type { Control } from "react-hook-form"

type Props = {
  control: Control<PetList>
  handleClickMoveToAfter: (index: number) => MouseEventHandler
  handleClickMoveToBefore: (index: number) => MouseEventHandler
  handleClickRemoveRecord: (index: number) => MouseEventHandler
  index: number
}

export const PetRecord: FC<Props> = (props) => {
  const {
    control,
    handleClickMoveToBefore,
    handleClickRemoveRecord,
    handleClickMoveToAfter,
    index,
  } = props

  return (
    <li style={{ display: "flex", gap: 20 }}>
      <div>
        <div>
          <button type="button" onClick={handleClickMoveToBefore(index)}>
            ↑
          </button>
        </div>
        <div>
          <button type="button" onClick={handleClickMoveToAfter(index)}>
            ↓
          </button>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: 20 }}>
          <PetType
            control={control}
            labelText="Dog"
            name={`petList.${index}.type`}
            targetValue="dog"
          />

          <PetType
            control={control}
            labelText="Cat"
            name={`petList.${index}.type`}
            targetValue="cat"
          />
        </div>
        <div>
          <PetName
            control={control}
            dependenceName={`petList.${index}.type`}
            name={`petList.${index}.name`}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClickRemoveRecord(index)}>
          X
        </button>
      </div>
    </li>
  )
}
