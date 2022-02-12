import React, {ReactElement, useContext} from 'react'
import {dietDayDataItem} from '../ts/types';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Settings from '../common/settings';
import { DietContext } from '../contexts/DietProvider.contexts';

interface propsInt {
  index:number
  thisDay: boolean
  dietItem: dietDayDataItem
  itemDone: boolean
  classNameEnding: string
  handleChangeState: () => void
}

const DietCalendarItem = (props: propsInt):ReactElement => {
  const {activeDay} = useContext(DietContext)


    const {index, thisDay, dietItem,itemDone, classNameEnding, handleChangeState} = props
    const {primaryColor, bigIconSize} = Settings 

    const classNames: string = `global--paragraph global--paragraph__black global--paragraph__medium global--paragraph__bold global--paragraph__clickable`
    



    return (
      <div className={`day--cell day--small__${classNameEnding} day--diet__D${index+1}H${classNameEnding} ${thisDay && 'day--active__cell'} ${index+1 !== activeDay && 'global--hideForVerySmall'}`}>
            {!thisDay ? 
            <div className={`global--paragraph global--paragraph__medium`}>{dietItem.text}</div> :
            <div className='diet--container'>
              <div onClick={() => handleChangeState()} className={classNames}>{dietItem.text}</div>
              {itemDone && <BsFillCheckCircleFill className='diet--foodCheckedIcon' color={primaryColor} size={bigIconSize} />}
            </div>
            } 
      </div>
    )
}

export default DietCalendarItem;