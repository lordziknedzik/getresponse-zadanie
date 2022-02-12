import React, {ReactElement} from 'react';
import {dietDataItem, dietDayDataItem} from '../ts/types';
import DietRowName from './DietRowName.component';
import DietCalendarDay from './DietCalendarDay.component'
import DietPrint from './DietPrint.component'
import {AiOutlineCaretRight} from 'react-icons/ai'
import {CgSmileMouthOpen} from 'react-icons/cg'
import Settings from '../common/settings';

interface propsInt {
  thisWeekData: dietDataItem[]
}

const DietCaldendar = (props: propsInt):ReactElement => {

    const {thisWeekData} = props
    const dietItems = thisWeekData[0].diet
    const {baseThumbSize, tertiaryColor} = Settings

    return (
        <div className='diet'>
          <div className='time--emptyCell diet--rowTitlecell'/>
          <div className='diet--carbCell time--cell'/>
          {dietItems.map((dietItem: dietDayDataItem, index: number) => <DietRowName key={index} dietItem={dietItem} />)}
          <div className={'diet--workoutRow global--paragraph  global--paragraph__bold'}>Workout <AiOutlineCaretRight size={10} /></div>
          {thisWeekData.map((dayItem:dietDataItem, index:number) => ( <DietCalendarDay  key={index} dayItem={dayItem} index={index} /> ))}
          <div className='diet--day7 global--hideForMedium'>
            <div className='diet--day7Text global--title__large global--title__tertiary'>Guilt-free day</div>
            <CgSmileMouthOpen size={baseThumbSize} color={tertiaryColor} />
          </div>
          <DietPrint />
        </div>
    )
}

export default DietCaldendar;