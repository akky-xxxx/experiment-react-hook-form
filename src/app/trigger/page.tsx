import { cookies } from "next/headers"

import { TriggerTemplate } from "../../components/templates/Trigger"
import { CookieKeys } from "../../shared/const/CookieKeys"

const TriggerPage = () => {
  const cookieStore = cookies()
  const testValue = cookieStore.get(CookieKeys.TEST_VALUE)
  const props = {
    testValue: testValue?.value,
  }
  return <TriggerTemplate {...props} />
}

export default TriggerPage
