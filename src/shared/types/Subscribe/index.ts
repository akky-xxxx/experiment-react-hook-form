import type {
  DeepPartial,
  EventType,
  FieldPath,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form"

export type SubscribeArguments<T extends FieldValues = FieldValues> = {
  name?: FieldPath<T>
  type?: EventType
  formState: DeepPartial<T>
  setValue: UseFormSetValue<T>
}

export type Subscribe<T extends FieldValues = FieldValues> = (
  subscribeArguments: SubscribeArguments<T>,
) => void
