import { getDaysInMonth } from "date-fns"
import { useMemo } from "react"

export const useBirthdayFields = (yearValue: string, monthValue: string) => {
  const isMonthEnable = Boolean(yearValue)
  const isDateEnable = Boolean(monthValue)

  const dates = useMemo(() => {
    const daysInMonth = getDaysInMonth(
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      new Date(Number(yearValue), Number(monthValue) - 1),
    )
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return Array.from({ length: daysInMonth }, (_, index) => index + 1)
  }, [yearValue, monthValue])

  return {
    dates,
    isDateEnable,
    isMonthEnable,
  }
}
