import { FunctionComponent, JSX, ReactNode } from 'react'
import styles from './styles.module.scss'
import { Button } from '../Button'
import { QuizData } from '../../data'

type QuizWrapperProps =
  Omit<QuizData, 'questions' | 'descriptions' | 'currentStep' | 'nextStep'>
  & {
  disabled: boolean
  onClick: () => void
  children: ReactNode
}

export const QuizWrapper: FunctionComponent<QuizWrapperProps> = ({
  title,
  buttonText,
  disabled,
  onClick,
  children,
}): JSX.Element => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
    <div className={styles.buttons}>
      <Button text={buttonText} onClick={onClick} disabled={disabled} />
    </div>
  </div>
)
