import { InputHTMLAttributes } from 'react'
import { IBaseInputProps } from '../../../types/form'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>,
  IBaseInputProps {
}
