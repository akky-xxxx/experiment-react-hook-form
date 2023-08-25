import { subscribeMonth } from "./index"

describe("subscribeMonth", () => {
  it('月が初期値に変更された時、setValue の引数が「birthday.date, ""」で実行される', () => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { month: "" } },
      name: "birthday.month",
      setValue,
      type: "change",
    } as const

    subscribeMonth(subscribeArguments)

    expect(setValue).toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.year", "")
    expect(setValue).toHaveBeenCalledTimes(1)
  })

  it('月が初期値から他に変更された時、setValue の引数が「birthday.date, ""」で実行される', () => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { year: "01" } },
      name: "birthday.month",
      setValue,
      type: "change",
    } as const

    subscribeMonth(subscribeArguments)

    expect(setValue).toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.year", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.month", "")
    expect(setValue).toHaveBeenCalledTimes(1)
  })

  it.each([
    ["年", "birthday.year"],
    ["日", "birthday.date"],
  ] as const)("%sが変更された時、 setValue は実行されない", (_, name) => {
    const setValue = jest.fn()
    const subscribeArguments = {
      formState: { birthday: { year: "" } },
      name,
      setValue,
      type: "change",
    } as const

    subscribeMonth(subscribeArguments)

    expect(setValue).not.toHaveBeenCalledWith("birthday.date", "")
    expect(setValue).not.toHaveBeenCalledWith("birthday.month", "")
    expect(setValue).toHaveBeenCalledTimes(0)
  })
})
