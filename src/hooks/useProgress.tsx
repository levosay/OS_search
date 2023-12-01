import { useState } from 'react'
import { IHookFormValues } from '../types/form'
import { prepData } from '../helpers'
import { StepsValue } from '../store/steps/stepsSlice.ts'

const initState = {
  windows: 0,
  linux: 0,
  macos: 0,
}

export const useProgress = () => {
  const [data, setData] = useState<StepsValue>(initState)
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

  const clearData = () => {
    setProgress(false)
  }

  return {
    data,
    progress,
    updateProgress,
    clearData,
  }
}
