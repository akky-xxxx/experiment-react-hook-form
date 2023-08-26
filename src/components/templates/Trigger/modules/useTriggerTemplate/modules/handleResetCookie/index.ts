import Cookies from "js-cookie"

import { CookieKeys } from "../../../../../../../shared/const/CookieKeys"

import type { MouseEventHandler } from "react"

export const handleResetCookie: MouseEventHandler = () => {
  Cookies.remove(CookieKeys.TEST_VALUE)
}
