import { subscribeYear } from "./index"

describe("subscribeYear", () => {
  it('年が初期値に変更された時、setValue の引数が「birthday.date, ""」、「birthday.month, ""」で実行される', () => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { year: "" } },
      name: "birthday.year",
      setValue,
      type: "change",
    } as const

    subscribeYear(subscribeArguments)

    expect(setValue).toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).toHaveBeenCalledWith("birthday.month", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.year", "")
    expect(setValue).toHaveBeenCalledTimes(2)
  })

  it('年が初期値から他に変更された時、setValue の引数が「birthday.date, ""」で実行され、「birthday.month, ""」では実行されない', () => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { year: "2023" } },
      name: "birthday.year",
      setValue,
      type: "change",
    } as const

    subscribeYear(subscribeArguments)

    expect(setValue).toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.month", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.year", "")
    expect(setValue).toHaveBeenCalledTimes(1)
  })

  it.each([
    ["月", "birthday.month"],
    ["日", "birthday.date"],
  ] as const)("%sが変更された時、 setValue は実行されない", (_, name) => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { year: "" } },
      name,
      setValue,
      type: "change",
    } as const

    subscribeYear(subscribeArguments)

    expect(setValue).not.toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.month", "")
    expect(setValue).toHaveBeenCalledTimes(0)
  })
})
