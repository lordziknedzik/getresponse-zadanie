import React, {ReactElement, useContext} from 'react'
import Settings from '../common/settings'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import { DietContext } from './../contexts/DietProvider.contexts';

const WeekSlider = ():ReactElement => {

    const {activeWeek, currentWeek, handleActiveWeekChange} = useContext(DietContext)
    const textClass = activeWeek === currentWeek ? 'global--title__primary' : activeWeek < currentWeek ? 'global--title__secondary' :'global--title__tertiary';

    return (
        <div className='week--slider'>
            <button onClick={() => handleActiveWeekChange(activeWeek -1)} className={`week--changeWeekButton ${activeWeek === 1 && 'week--changeWeekButton__inactive'}`}>
                <RiArrowLeftSLine size={Settings.baseThumbSize * 0.75} color={Settings.greyColor} />
            </button>
            <div className={`global--title__large ${textClass} week--weekNumber`}>Week {activeWeek}</div>
            <button onClick={() => handleActiveWeekChange(activeWeek +1)} className={`week--changeWeekButton ${activeWeek === 12 && 'week--changeWeekButton__inactive'}`}>
                <RiArrowRightSLine size={Settings.baseThumbSize * 0.75} color={Settings.greyColor}/>
            </button>

        </div>
    )
}

export default WeekSlider;