import type { Subscribe } from "../../../../../../../shared/types/Subscribe"
import type { Register } from "../../../../types/Register"

export const subscribeYear: Subscribe<Register> = (subscribeArguments) => {
  const { formState, name, setValue, type } = subscribeArguments
  if (name === "birthday.year" && type === "change") {
    const isSelectedBirthdayYear = Boolean(formState.birthday?.year)
    setValue("birthday.date", "")
    if (!isSelectedBirthdayYear) {
      setValue("birthday.month", "")
    }
  }
}
