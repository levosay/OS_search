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
            macos: 3,
          },
        },
        {
          labelMessage: 'Учеба',
          inputFormName: 'check_learn',
          value: 0,
          osValues: {
            windows: 1,
            linux: 1,
            macos: 1,
          },
        },
        {
          labelMessage: 'Работа',
          inputFormName: 'check_work',
          value: 0,
          osValues: {
            windows: 1,
            linux: 1,
            macos: 1,
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
            windows: 3,
            linux: 0,
            macos: 2,
          },
        },
        {
          labelMessage: 'Vegas',
          inputFormName: 'check_vegas',
          value: 0,
          osValues: {
            windows: 2,
            linux: 0,
            macos: 1,
          },
        },
        {
          labelMessage: 'Blender',
          inputFormName: 'check_blender',
          value: 0,
          osValues: {
            windows: 2,
            linux: 0,
            macos: 2,
          },
        },
        {
          labelMessage: 'CorelDRAW',
          inputFormName: 'check_CorelDRAW',
          value: 0,
          osValues: {
            windows: 4,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'Docker',
          inputFormName: 'check_docker',
          value: 0,
          osValues: {
            windows: 1,
            linux: 5,
            macos: 4,
          },
        },
        {
          labelMessage: 'Microsoft Office',
          inputFormName: 'check_office',
          value: 0,
          osValues: {
            windows: 3,
            linux: 1,
            macos: 3,
          },
        },
        {
          labelMessage: 'Другие...',
          inputFormName: 'check_other',
          value: 0,
          osValues: {
            windows: 1,
            linux: 0,
            macos: 1,
          },
        },
      ],
    },
  },
  {
    title: 'Ваша профессия?',
    buttonText: 'Далее',
    currentStep: 3,
    nextStep: 4,
    descriptions: 'Выберете сверу своей деятельности',
    questions: {
      type: 'profession',
      value: [
        {
          labelMessage: 'Разработчик',
          inputFormName: 'check_developer',
          value: 0,
          osValues: {
            windows: 1,
            linux: 4,
            macos: 4,
          },
        },
        {
          labelMessage: 'Дизайнер',
          inputFormName: 'check_designer',
          value: 0,
          osValues: {
            windows: 2,
            linux: 0,
            macos: 4,
          },
        },
        {
          labelMessage: 'Бухгалтер',
          inputFormName: 'check_accountant',
          value: 0,
          osValues: {
            windows: 4,
            linux: 0,
            macos: 0,
          },
        },
        {
          labelMessage: 'Менеджер',
          inputFormName: 'check_manager',
          value: 0,
          osValues: {
            windows: 2,
            linux: 0,
            macos: 2,
          },
        },
        {
          labelMessage: 'Другая...',
          inputFormName: 'check_proOther',
          value: 0,
          osValues: {
            windows: 3,
            linux: 0,
            macos: 0,
          },
        },
      ],
    },
  },
  {
    title: 'Дополнительные вопросы',
    buttonText: 'Далее',
    currentStep: 4,
    nextStep: 5,
    descriptions: 'Выберете опции, которые Вам будут полезны',
    questions: {
      type: 'options',
      value: [
        {
          labelMessage: 'Работа через командную строку',
          inputFormName: 'check_cmd',
          value: 0,
          osValues: {
            windows: 1,
            linux: 5,
            macos: 4,
          },
        },
        {
          labelMessage: 'Общая экосистема',
          inputFormName: 'check_eco',
          value: 0,
          osValues: {
            windows: 0,
            linux: 0,
            macos: 5,
          },
        },
        {
          labelMessage: 'Универсальность',
          inputFormName: 'check_versatility',
          value: 0,
          osValues: {
            windows: 4,
            linux: 1,
            macos: 1,
          },
        },
        {
          labelMessage: 'Порог входа',
          inputFormName: 'check_entry',
          value: 0,
          osValues: {
            windows: 4,
            linux: 0,
            macos: 1,
          },
        },
        {
          labelMessage: 'Доступность',
          inputFormName: 'check_availability',
          value: 0,
          osValues: {
            windows: 1,
            linux: 5,
            macos: 0,
          },
        },
        {
          labelMessage: 'Повышенная безопасность',
          inputFormName: 'check_safety',
          value: 0,
          osValues: {
            windows: 0,
            linux: 5,
            macos: 5,
          },
        },
      ],
    },
  },
]



