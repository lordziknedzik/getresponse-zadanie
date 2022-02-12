import React, {ReactElement, useContext} from 'react'
import WeekContainer from '../components/WeekContainer.component'
import DietCalendar from '../components/DietCalendar.component'
import { DietContext } from '../contexts/DietProvider.contexts';
import {DietContextInt} from '../ts/interfaces';

const Calendar = ():ReactElement => {

    const {activeWeek, dietData, currentWeek}= useContext<DietContextInt>(DietContext) 

    const thisWeekData = dietData?.filter((dietItem) => dietItem.week === activeWeek)
    
    
    return (
        <div className='calendar'>
            <WeekContainer />
            {thisWeekData && <DietCalendar thisWeekData={thisWeekData} />}
            
        </div>
    )
}

export default Calendar;