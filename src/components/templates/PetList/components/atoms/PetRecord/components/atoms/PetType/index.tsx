import { usePetType } from "./modules/usePetType"

import type { PetList } from "../../../../../../types"
import type { Control, FieldPath, FieldValues } from "react-hook-form"

type Props<
  FormValues extends FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = {
  control: Control<FormValues>
  targetValue: PetList["petList"][number]["type"]
  labelText: string
  name: FormNames
}

export const PetType = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control, targetValue, labelText, name } = props
  const { field } = usePetType({ control, name })

  return (
    <label>
      <input
        checked={field.value === targetValue}
        type="radio"
        {...field}
        value={targetValue}
      />{" "}
      {labelText}
    </label>
  )
}
