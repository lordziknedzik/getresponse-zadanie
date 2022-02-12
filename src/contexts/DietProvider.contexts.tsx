import React, {useState, createContext} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Settings from './../common/settings';
import { DietContextInt} from '../ts/interfaces';
import {dietDayDataItem} from '../ts/types'


export const DietContext = createContext<DietContextInt | any>(null);

const DietContextProvider = (props:any):React.ReactElement => {

  const {isLoading, isError, error, data} = useQuery('dietQuery', () =>  axios.get(Settings.dietEndpoint))


  const updateDayDiet = (dayID: string, newDiet: dietDayDataItem[]):void => {
    axios.patch(`${Settings.dietEndpoint}/${"day1"}`, {diet: newDiet})
  }


  const dietData = data?.data
  const [activeWeek, setActiveWeek] = useState<number>(3);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [currentWeek, setCurrentWeek] = useState<number>(3);
  const [currentDay, setCurrentDay] = useState<number>(17)

  const validateWeek = (week:number):number => {
    if (week > 12) return 12
    if (week < 1) return 1
    return week
  }

  const validateDay = (day:number):number => {
    if (day > 6) return 6
    if (day < 1) return 1
    return day
  }

  const handleCurrentWeekChange = (newWeek:number):void => setCurrentWeek(validateWeek(newWeek))
  const handleActiveWeekChange = (newWeek:number):void => {
    setActiveWeek(validateWeek(newWeek))
    setActiveDay(1)
  }
  const handleActiveDayChange = (newDay:number):void => setActiveDay(validateDay(newDay))

  
  return (
    <DietContext.Provider value={{activeWeek, activeDay,handleActiveDayChange, currentWeek, dietData, currentDay,  handleCurrentWeekChange, handleActiveWeekChange, updateDayDiet, isError, error}}>
      {props.children}
    </DietContext.Provider>
  )
}

export default DietContextProvider;