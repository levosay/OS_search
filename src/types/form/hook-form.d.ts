export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `check_${string}`]: boolean

  [key: `radio_${string}_`]: string | null

  [key: `text_${string}_`]: string
}
