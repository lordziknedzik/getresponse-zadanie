import {dietDataItem, navButtonConfType, proteinOptions} from './types'


export interface DietContextInt {
  activeWeek: number
  activeDay: number
  currentWeek: number
  currentDay: number
  handleCurrentWeekChange: () => void
  handleActiveWeekChange: () => void
  handleActiveDayChange: () => void
  updateDayDiet: () => void
  dietData: dietDataItem[]
  isError: boolean
  error: string
}

export interface BotNavConfigInt {
  id: string
  title: string
  text: string
  buttonConfig: navButtonConfType[]
}

