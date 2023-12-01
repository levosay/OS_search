import { ButtonHTMLAttributes, FunctionComponent, JSX } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  ...props
}): JSX.Element => {
  return (
    <button {...props}>{text}</button>
  )
}
