import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IHookFormProps } from '../../types/form'

export type Steps = 0 | 1 | 2 | 3 | 4 | 5
export type OSTypes = 'windows' | 'linux' | 'macos'
export type StepsValue = Record<OSTypes, number>

export interface Question extends IHookFormProps {
  labelMessage: string
  value: number
  osValues: StepsValue
}

export interface StepState {
  step: Steps
  values: StepsValue
}

const initialState: StepState = {
  step: 0,
  values: {
    windows: 0,
    linux: 0,
    macos: 0,
  },
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setStep: (state, { payload }: PayloadAction<Steps>) => {
      state.step = payload
    },
    addValueStep: (state, { payload }: PayloadAction<StepsValue>) => {
      state.values.windows += payload.windows
      state.values.linux += payload.linux
      state.values.macos += payload.macos
    },
    clearStep: (state) => {
      state.step = 0
    },
  },
})

export const { setStep, addValueStep, clearStep } = stepSlice.actions
export const stepReducer = stepSlice.reducer
