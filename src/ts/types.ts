

export type dietDataItem = {
  id: string
  day: number,
  week: number, 
  workout: boolean, 
  workoutDone: boolean,
  carb: string
  diet: dietDayDataItem[]
}

export type dietDayDataItem = {
  id: string,
  time: string,
  text: string,
  done: boolean
}

export type navButtonConfType = {
  linkTo: string
  text: string
  androidIcon: boolean
  iOSIcon: boolean
}

export type proteinOptions = {
  vegetables: boolean
  cheese: boolean
  redMeat: boolean
  fish: boolean
  chicken: boolean
}