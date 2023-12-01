import { useState } from 'react'
import { IHookFormValues } from '../types/form'
import { prepData } from '../helpers'
import { StepsValue } from '../store/steps/stepsSlice.ts'

export const useProgress = () => {
  const [data, setData] = useState<StepsValue>({
    windows: 0,
    linux: 0,
    macos: 0,
  })
  const [progress, setProgress] = useState(false)

  const updateProgress = (data: IHookFormValues): boolean => {
    const arrData = Object.values(data)
    const newStepData: StepsValue = {
      windows: 0,
      linux: 0,
      macos: 0,
    }

    for (let i = arrData.length; i--;) {
      if (arrData[i]) {
        const objData = JSON.parse(arrData[i])

        newStepData.windows += objData.windows
        newStepData.linux += objData.linux
        newStepData.macos += objData.macos
      }

      setData(newStepData)
    }

    if (prepData(data)) {
      setProgress(true)
      return true
    } else {
      setProgress(false)
      return false
    }
  }

  return {
    data,
    progress,
    updateProgress,
  }
}
