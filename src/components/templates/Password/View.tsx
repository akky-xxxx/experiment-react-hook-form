import { validators } from "./modules/validators"
import { ErrorMessage } from "../../atoms/ErrorMessage"
import { Text } from "../../atoms/Text"

import type { Password } from "./types/Password"
import type { FormEventHandler, FC } from "react"
import type { FieldErrors, UseFormRegister } from "react-hook-form"

type Props = {
  errors: FieldErrors<Password>
  handleSubmit: FormEventHandler
  register: UseFormRegister<Password>
}

export const PasswordView: FC<Props> = (props) => {
  const { errors, handleSubmit, register } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Text<Password>
          labelText="Current password"
          name="currentPassword"
          register={register}
          type="password"
          validate={validators.validateCurrentPassword}
        />
        <ErrorMessage errorMessage={errors.currentPassword?.message} />
      </div>

      <div>
        <Text<Password>
          labelText="New password"
          name="newPassword"
          register={register}
          type="password"
          validate={validators.validateNewPassword}
        />
        <ErrorMessage errorMessage={errors.newPassword?.message} />
      </div>

      <div>
        <Text<Password>
          labelText="New password ( Confirmation )"
          name="confirmationPassword"
          register={register}
          type="password"
          validate={validators.validateConfirmationPassword}
        />
        <ErrorMessage errorMessage={errors.confirmationPassword?.message} />
      </div>

      <button type="submit">Confirm</button>
    </form>
  )
}
