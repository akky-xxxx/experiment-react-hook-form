import type { Subscribe } from "../../../../../../../shared/types/Subscribe"
import type { Register } from "../../../../types/Register"

export const subscribeMonth: Subscribe<Register> = (subscribeArguments) => {
  const { formState, name, setValue, type } = subscribeArguments
  if (name === "birthday.month" && type === "change") {
    const isSelectedBirthdayMonth = Boolean(formState.birthday?.month)
    setValue("birthday.date", "")
    if (!isSelectedBirthdayMonth) {
      setValue("birthday.date", "")
    }
  }
}
