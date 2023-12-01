import './App.css'
import { StepCreate } from './modules'
import { quizData } from './data'

function App() {
  return (
    <>
      {quizData.map((elem) => (
        <StepCreate key={elem.title} {...elem} />
      ))}

    </>
  )
}

export default App
