import './App.css'
import { StepCreate } from './modules'
import { quizData } from './data'
import { stepStore, useAppSelector } from './store/hooks.ts'
import { FinishStep } from './modules/FinishStep/FinishStep.tsx'

function App() {
  const { step } = useAppSelector(stepStore)
  return (
    <>
      {quizData.map((elem) => (
        <StepCreate key={elem.title} {...elem} />
      ))}

      {step === 5 && <FinishStep />}
    </>
  )
}

export default App
