import { IHookFormValues } from '../types/form'

export const prepData = (data: IHookFormValues) => {
  for (let i = Object.values(data).length; i--;) {
    if (Object.values(data)[i]) {
      return true
    }
  }

  return false
}
