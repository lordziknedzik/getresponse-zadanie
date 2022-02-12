import React, {ReactElement, useContext, useState} from 'react'
import DietCalendarItem from './DietCalendarItem.component'
import {dietDataItem} from '../ts/types';
import { DietContext } from '../contexts/DietProvider.contexts';
import {IoBarbellSharp} from 'react-icons/io5';
import {FaCheck} from 'react-icons/fa'
import Settings from '../common/settings';

interface propsInt {
  dayItem:dietDataItem
  index: number
}

const DietCalendarDay = (props: propsInt):ReactElement => {

    const {dayItem, index} = props
    const [workoutDone, setWorkoutDone] = useState<boolean>(dayItem.workoutDone)
    const [done6AM, setDone6AM] = useState<boolean>(true)
    const [done9AM, setDone9AM] = useState<boolean>(true)
    const [done12PM, setDone12PM] = useState<boolean>(false)
    const [done3PM, setDone3PM] = useState<boolean>(false)
    const [done6PM, setDone6PM] = useState<boolean>(false)


    const [diet6AM, diet9AM, diet12PM, diet3PM, diet6PM]  = dayItem.diet
    const {currentDay, activeDay} = useContext(DietContext)
    const {baseThumbSize, primaryColor, greyColor} = Settings

    if (dayItem.day % 7 === 0) return <div key={index} className={`day--${index+1} global--title__medium day--header`}>Day {dayItem.day}</div>
    const thisDay = currentDay === dayItem.day

    const handleWorkoutStateChange = () => {
      setWorkoutDone((prevState:boolean) => !prevState)
    }

    const handleStateChange6AM = () => setDone6AM((prevState:boolean) => !prevState)
    const handleStateChange9AM = () => setDone9AM((prevState:boolean) => !prevState)
    const handleStateChange12PM = () => setDone12PM((prevState:boolean) => !prevState)
    const handleStateChange3PM = () => setDone3PM((prevState:boolean) => !prevState)
    const handleStateChange6PM = () => setDone6PM((prevState:boolean) => !prevState)


    return (
        <>
          <div key={index} className={`day--${index+1} global--title__medium day--header day--small__dayNumber ${thisDay && 'day--active__header'} ${activeDay !==index+1 && 'global--hideForVerySmall'}`}>Day {dayItem.day}</div>
          <DietCalendarItem index={index} thisDay={thisDay} dietItem={diet6AM} itemDone={done6AM} handleChangeState={handleStateChange6AM} classNameEnding={`6AM`}/>
          <DietCalendarItem index={index} thisDay={thisDay} dietItem={diet9AM} itemDone={done9AM} handleChangeState={handleStateChange9AM} classNameEnding={`9AM`}/>
          <DietCalendarItem index={index} thisDay={thisDay} dietItem={diet12PM} itemDone={done12PM} handleChangeState={handleStateChange12PM} classNameEnding={`12PM`}/>
          <DietCalendarItem index={index} thisDay={thisDay} dietItem={diet3PM} itemDone={done3PM} handleChangeState={handleStateChange3PM} classNameEnding={`3PM`}/>
          <DietCalendarItem index={index} thisDay={thisDay} dietItem={diet6PM} itemDone={done6PM} handleChangeState={handleStateChange6PM} classNameEnding={`6PM`}/>
          
          <div className={`diet--rowTitlecell day--${index+1}carb day--small__carb ${activeDay !==index+1 && 'global--hideForVerySmall'} ${thisDay && 'day--active__cell'} 
          time--cell global--paragraph  global--paragraph__bold global--paragraph__upper`}>{dayItem.carb}</div>
          <div className={`diet--workout day--${index+1}workout day--small__workout ${thisDay && 'day--active__bottom'} ${activeDay !==index+1 && 'global--hideForVerySmall'}`}>
            <IoBarbellSharp 
              className='diet--barbell' 
              size={baseThumbSize} 
              color={workoutDone ? primaryColor : greyColor}
              onClick={() => handleWorkoutStateChange()}/>
            {workoutDone && <FaCheck className='diet--checkIcon' color={primaryColor}/>} 
            </div>
        </>
    )
}

export default DietCalendarDay;