import Cookies from "js-cookie"

import { CookieKeys } from "../../../../../../../shared/const/CookieKeys"

import type { MouseEventHandler } from "react"

export const handleClickIncorrectCookie: MouseEventHandler = () => {
  Cookies.set(CookieKeys.TEST_VALUE, "a")
}
