import React, {ReactElement, useContext} from 'react'
import Settings from '../common/settings'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import { DietContext } from './../contexts/DietProvider.contexts';

const DaySlider = ():ReactElement => {

    const {activeDay, currentWeek, handleActiveDayChange} = useContext(DietContext)

    return (
        <div className='week--slider week--daySlider'>
            <button onClick={() => handleActiveDayChange(activeDay -1)} className={`week--changeWeekButton ${activeDay === 1 && 'week--changeWeekButton__inactive'}`}>
                <RiArrowLeftSLine size={Settings.baseThumbSize * 0.75} color={Settings.greyColor} />
            </button>
            <div className={`global--title__large global--title__secondary week--weekNumber`}>Day {activeDay}</div>
            <button onClick={() => handleActiveDayChange(activeDay +1)} className={`week--changeWeekButton ${activeDay === 6 && 'week--changeWeekButton__inactive'}`}>
                <RiArrowRightSLine size={Settings.baseThumbSize * 0.75} color={Settings.greyColor}/>
            </button>

        </div>
    )
}

export default DaySlider;