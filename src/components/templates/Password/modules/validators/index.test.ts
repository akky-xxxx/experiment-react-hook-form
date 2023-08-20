import { validators } from "./index"

import type { Password } from "../../types/Password"

const {
  validateConfirmationPassword,
  validateCurrentPassword,
  validateNewPassword,
} = validators

const EmptyFormValues: Password = {
  confirmationPassword: "",
  currentPassword: "",
  newPassword: "",
}

describe("password change page validator", () => {
  describe("validateConfirmationPassword", () => {
    it.each([
      [
        "確認用と新しいパスワードが一致する場合、「true」を返す",
        "12345678",
        {
          newPassword: "12345678",
        },
        true,
      ],
      [
        '確認用と新しいパスワードが異なる場合、「Diff password between "New password" and "Confirmation"」を返す',
        "12345678",
        {
          newPassword: "newPassword",
        },
        'Diff password between "New password" and "Confirmation"',
      ],
      [
        "確認用のパスワードが7文字の場合、新しいパスワードと一致しなくても「Password must contain at least 8 characters」を返す",
        "1234567",
        {
          newPassword: "1234567",
        },
        "Password must contain at least 8 characters",
      ],
    ] as const)("%s", (_, value, formValues, expectValue) => {
      if (!validateConfirmationPassword) return
      expect(
        validateConfirmationPassword(value, {
          ...EmptyFormValues,
          ...formValues,
        }),
      ).toBe(expectValue)
    })
  })

  describe("validateCurrentPassword", () => {
    it.each([
      ["現在のパスワードが8文字の場合、「true」を返す", "12345678", {}, true],
      [
        "現在ののパスワードが7文字の場合、「Password must contain at least 8 characters」を返す",
        "1234567",
        {},
        "Password must contain at least 8 characters",
      ],
    ] as const)("%s", (_, value, formValues, expectValue) => {
      if (!validateCurrentPassword) return
      expect(
        validateCurrentPassword(value, {
          ...EmptyFormValues,
          ...formValues,
        }),
      ).toBe(expectValue)
    })
  })

  describe("validateNewPassword", () => {
    it.each([
      [
        "現在のパスワードと新しいパスワードが異なる場合、「true」を返す",
        "12345678",
        {
          currentPassword: "currentPassword",
        },
        true,
      ],
      [
        '現在のパスワードと新しいパスワードが一致する場合、「Same password between "Current password" and "New password"」を返す',
        "12345678",
        {
          currentPassword: "12345678",
        },
        'Same password between "Current password" and "New password"',
      ],
      [
        "新しいパスワードが7文字の場合、現在のパスワードと一致しても「Password must contain at least 8 characters」を返す",
        "1234567",
        {
          currentPassword: "12345678",
        },
        "Password must contain at least 8 characters",
      ],
    ] as const)("%s", (_, value, formValues, expectValue) => {
      if (!validateNewPassword) return
      expect(
        validateNewPassword(value, {
          ...EmptyFormValues,
          ...formValues,
        }),
      ).toBe(expectValue)
    })
  })
})
