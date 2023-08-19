import type { FC } from "react"

type Props = {
  errorMessage?: string
}

export const ErrorMessage: FC<Props> = (props) => {
  const { errorMessage } = props

  if (!errorMessage) return null

  return <span style={{ color: "red" }}>{errorMessage}</span>
}
