import React, {ReactElement} from 'react'
import WeekProteinSelector from './WeekProteinSelector.component';
import WeekProgress from './WeekProgress.component';
import WeekSlider from './WeekSlider.component';
import DaySlider from './DaySlider.component'

const WeekContainer = ():ReactElement => {

    return (
        <div className='week'>
          <WeekProgress /> 
          <WeekSlider />
          <DaySlider />
          <WeekProteinSelector />
        </div>
    )
}

export default WeekContainer;