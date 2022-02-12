import React, {ReactElement} from 'react'
import {ImPrinter} from 'react-icons/im';
import Settings from '../common/settings';

const DietPrint = ():ReactElement => {

    return (
        <div className='diet--print'>
          <ImPrinter className='global--clickable' size={Settings.baseThumbSize} color={Settings.greyColor} />
          <div className='global--paragraph global--paragraph__large global--clickable'>Print</div>
        </div>
    )
}

export default DietPrint;