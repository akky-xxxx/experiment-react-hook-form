import { useForm } from "react-hook-form"

import type { FieldValues, UseFormProps } from "react-hook-form"

// resolver を使うと要素ごとの validate が非活性となるため
type Props<F extends FieldValues, C> = Omit<UseFormProps<F, C>, "resolver">

export const useNoResolverForm = <
  F extends FieldValues,
  // react hook form の型を踏襲している
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C = any,
  T extends FieldValues | undefined = undefined,
>(
  props?: Props<F, C>,
) => useForm<F, C, T>(props)
