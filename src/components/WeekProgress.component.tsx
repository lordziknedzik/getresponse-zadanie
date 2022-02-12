import React, {ReactElement, useContext} from 'react'
import {DietContext} from '../contexts/DietProvider.contexts'

const WeekProgress = ():ReactElement => {

    const weeks = [1,2,3,4,5,6,7,8,9,10,11,12]
    const title = `Your ${weeks.length} week progress`
    const {currentWeek, handleActiveWeekChange} = useContext(DietContext)
    // const activeWeek = 40


    return (
        <div className='week--container week--progress'>
          <div className='week--progressText'> {title} </div>
          <div className='week--stepper'>
            {weeks.map(week => (
              <div key={week} className='week--step'>
                <div onClick={() => handleActiveWeekChange(week) } 
                className={
                    `week--circle 
                    ${week < weeks.length && 'week--circle__withConnector'}
                    ${week > currentWeek -1 && 'week--circle__withConnectorInactive week--circle__future'}
                    ${currentWeek === week && 'week--circle__current'}
                  `}
                  />

                <div className='week--progressText'>{week}</div>
                
              </div>
            ))}
          </div>

        </div>
    )
}

export default WeekProgress;