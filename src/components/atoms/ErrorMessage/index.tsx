import type { FC } from "react"

type Props = {
  errorMessage?: string
}

// TODO: ErrorText に変えて react hook form の ErrorMessage をそのまま使えるようにする
export const ErrorMessage: FC<Props> = (props) => {
  const { errorMessage } = props

  if (!errorMessage) return null

  return <span style={{ color: "red" }}>{errorMessage}</span>
}
