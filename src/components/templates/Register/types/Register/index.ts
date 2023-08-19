export type Register = {
  birthday: Record<"date" | "month" | "year", string>
  id: string
  name: Record<"firstName" | "lastName", string>
  password: string
}
