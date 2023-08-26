import type { Form } from "./types"
import type { FormEventHandler, MouseEventHandler, FC } from "react"
import type { UseFormRegister } from "react-hook-form"

type Props = {
  enableSave: boolean
  errorMessage?: string
  handleClickIncorrectCookie: MouseEventHandler
  handleResetCookie: MouseEventHandler
  handleSubmit: FormEventHandler
  register: UseFormRegister<Form>
}

export const TriggerView: FC<Props> = (props) => {
  const {
    enableSave,
    errorMessage,
    handleClickIncorrectCookie,
    handleResetCookie,
    handleSubmit,
    register,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        {...register("input", {
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          validate: (value) => (value.length > 1 ? true : "min 2 characters"),
        })}
      />
      <button disabled={!enableSave} type="submit">
        Save
      </button>
      <button type="button" onClick={handleResetCookie}>
        Reset Cookie
      </button>
      <button type="button" onClick={handleClickIncorrectCookie}>
        Set Incorrect Cookie
      </button>
      {Boolean(errorMessage) && (
        <div style={{ color: "red" }}>{errorMessage}</div>
      )}
    </form>
  )
}
