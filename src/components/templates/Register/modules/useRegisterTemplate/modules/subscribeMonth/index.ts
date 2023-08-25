import type { Subscribe } from "../../../../../../../shared/types/Subscribe"
import type { Register } from "../../../../types/Register"

export const subscribeMonth: Subscribe<Register> = (subscribeArguments) => {
  const { name, setValue, type } = subscribeArguments
  if (name === "birthday.month" && type === "change") {
    setValue("birthday.date", "")
  }
}
