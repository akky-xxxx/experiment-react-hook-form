import { useController } from "react-hook-form"

import { Text } from "../../../../../../../../atoms/Text"

import type { Control, FieldPath, FieldValues } from "react-hook-form"

type Props<
  FormValues extends FieldValues,
  FormNames extends FieldPath<FormValues> = FieldPath<FormValues>,
> = {
  control: Control<FormValues>
  dependenceName: FormNames
  name: FormNames
}

export const PetName = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const { control, dependenceName, name } = props
  const { field } = useController({ control, name: dependenceName })
  const { register } = control

  return (
    <Text
      disabled={!field.value}
      labelText="Name"
      name={name}
      register={register}
    />
  )
}
