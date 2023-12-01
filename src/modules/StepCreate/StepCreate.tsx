import { FunctionComponent, JSX } from 'react'
import { QuizWrapper } from '../../components'
import styles from './styles.module.scss'
import { Form } from '../../components/forms'
import { IHookFormValues } from '../../types/form/hook-form'
import { useProgress } from '../../hooks/useProgress.tsx'
import { QuizData } from '../../data'
import { stepStore, useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { addValueStep, setStep } from '../../store/steps/stepsSlice.ts'

export const StepCreate: FunctionComponent<QuizData> = ({
  descriptions,
  nextEnable,
  questions,
  nextStep,
  ...props
}): JSX.Element | null => {
  const { data, progress, updateProgress } = useProgress()
  const { step } = useAppSelector(stepStore)
  const dispatch = useAppDispatch()

  if (props.currentStep !== step) return null

  const submit = (data: IHookFormValues) => {
    updateProgress(data)
  }

  const toNextStep = () => {
    if (questions) {
      dispatch(addValueStep(data))
    }

    dispatch(setStep(nextStep))
  }

  return (
    <QuizWrapper
      disabled={!progress && !nextEnable}
      onClick={toNextStep}
      {...props}
    >
      {descriptions && <p>{descriptions}</p>}
      {questions && (
        <div className={styles.form}>
          <Form onSubmit={submit} autoSubmit>
            {questions?.value.map(({
              labelMessage,
              inputFormName,
              osValues,
            }) => (
              <Form.Checkbox
                key={inputFormName}
                value={JSON.stringify(osValues)}
                labelMessage={labelMessage}
                hookFormProps={{
                  inputFormName,
                }}
              />
            ))}
          </Form>
        </div>
      )}
    </QuizWrapper>
  )
}
