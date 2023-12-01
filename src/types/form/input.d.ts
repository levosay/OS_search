import { IHookFormValues } from './hook-form'

type TInputName = keyof IHookFormValues

export interface IHookFormProps {
  inputFormName: TInputName
}

export interface IBaseInputProps {
  labelMessage?: string
  hookFormProps: IHookFormProps
}
