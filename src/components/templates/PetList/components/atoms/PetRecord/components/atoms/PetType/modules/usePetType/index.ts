import { useController } from "react-hook-form"

import type { Control, FieldPath, FieldValues } from "react-hook-form"

type Props<
  FormValues extends FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = {
  control: Control<FormValues>
  name: FormNames
}

export const usePetType = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control, name } = props
  const { field } = useController({
    control,
    name,
  })

  return { field }
}
