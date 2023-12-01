import { FunctionComponent, JSX } from 'react'
import { QuizWrapper } from '../../components'
import { stepStore, useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { clearStep, StepsValue } from '../../store/steps/stepsSlice.ts'

const ucFirst = (str: string) => {
  if (!str) return str

  return str[0].toUpperCase() + str.slice(1)
}

export const FinishStep: FunctionComponent = (): JSX.Element => {
  const { values } = useAppSelector(stepStore)
  const dispatch = useAppDispatch()

  const getOSName = () => {
    const maxPoints = {
      name: '',
      value: 0,
    }

    for (const key in values) {
      const fieldName = key as keyof StepsValue

      if (values[fieldName] > maxPoints.value) {
        maxPoints.name = ucFirst(fieldName)
        maxPoints.value = values[fieldName]
      }
    }

    return maxPoints.name
  }

  const toStart = () => {
    dispatch(clearStep())
  }

  return (
    <QuizWrapper
      title={'Ваш выбор'}
      buttonText={'Начать сначала'}
      disabled={false}
      onClick={toStart}
    >
      <p>По нашим подсчетам, Вам лучше всего подходит операционная
        система <span>{getOSName()}</span></p>
    </QuizWrapper>
  )
}
