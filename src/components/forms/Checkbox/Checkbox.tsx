import { FunctionComponent } from 'react'
import { ICheckboxProps } from './Checkbox.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from '../../../types/form'
import styles from './styles.module.scss'


export const Checkbox: FunctionComponent<ICheckboxProps> = ({
  hookFormProps,
  disabled,
  labelMessage,
  value,
  ...props
}): JSX.Element => {
  const {
    register,
    getValues,
    setValue,
  } = useFormContext<IHookFormValues>()
  // const fieldIsError = !!errors[hookFormProps.inputFormName]

  const onHandler = () => {
    const currentValue = getValues(hookFormProps.inputFormName)
    if (!currentValue) setValue(hookFormProps.inputFormName, value as string)
    if (currentValue) setValue(hookFormProps.inputFormName, false)
  }

  return (
    <div
      className={styles.wrapper}>
      {labelMessage &&
        <label
          className={styles.label}
          htmlFor={hookFormProps.inputFormName}
          onClick={onHandler}
        >
          {labelMessage}
        </label>
      }
      <input
        className={styles.input}
        type={'checkbox'}
        disabled={disabled}
        {...register(hookFormProps.inputFormName)}
        {...props}
        value={value}
      />
    </div>
  )
}
