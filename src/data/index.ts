import { Question, Steps } from '../store/steps/stepsSlice.ts'

export interface QuizData {
  title: string
  buttonText: string
  currentStep: Steps
  nextStep: Steps
  descriptions?: string
  nextEnable?: boolean
  questions?: {
    type: string
    value: Question[]
  }
}

export const quizData: QuizData[] = [
  {
    title: 'Привет',
    buttonText: 'Начать',
    currentStep: 0,
    nextStep: 1,
    descriptions: 'Данный сервис помогает в выборе OS исходя из Ваших потребностей',
    nextEnable: true,
  },
  {
    title: 'Направление',
    buttonText: 'Далее',
    currentStep: 1,
    nextStep: 2,
    descriptions: 'Выберете одно или несколько направлений',
    questions: {
      type: 'first',
      value: [
        {
          labelMessage: 'Игры',
          inputFormName: 'check_game',
          value: 0,
          osValues: {
            windows: 10,
            linux: 0,
            macos: 2,
          },
        },
        {
          labelMessage: 'Учеба',
          inputFormName: 'check_learn',
          value: 0,
          osValues: {
            windows: 10,
            linux: 1,
            macos: 5,
          },
        },
        {
          labelMessage: 'Работа',
          inputFormName: 'check_work',
          value: 0,
          osValues: {
            windows: 5,
            linux: 10,
            macos: 10,
          },
        },
      ],
    },
  },
  {
    title: 'Программы',
    buttonText: 'Далее',
    currentStep: 2,
    nextStep: 3,
    descriptions: 'Какие программы вы планируете использовать?',
    questions: {
      type: 'program',
      value: [
        {
          labelMessage: 'Adobe Photoshop',
          inputFormName: 'check_photoshop',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'Vegas',
          inputFormName: 'check_vegas',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'Blender',
          inputFormName: 'check_blender',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'EDIUS',
          inputFormName: 'check_EDIUS',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'CorelDRAW',
          inputFormName: 'check_CorelDRAW',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'Другие...',
          inputFormName: 'check_other',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 0,
          },
        },
      ],
    },
  },
]
