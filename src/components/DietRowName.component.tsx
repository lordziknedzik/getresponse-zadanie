import React, {ReactElement} from 'react'
import {dietDataItem, dietDayDataItem} from '../ts/types'


interface propsInt {
  dietItem: dietDayDataItem
}

const DietRowName = (props: propsInt):ReactElement => {

  const {dietItem} = props
  const timeClass = `time--${dietItem.time.replace(":00 ","")}`
  const timeHour = dietItem.time.split(" ")

  return (
  <div className={`${timeClass} time--cell`}>   
      <div className='global--paragraph global--paragraph__bold'>{`${timeHour[0]}`}</div> 
      <div className='global--paragraph time--smallMargin'>{`${timeHour[1]}`}</div>
    </div>
  )
}

export default DietRowName;