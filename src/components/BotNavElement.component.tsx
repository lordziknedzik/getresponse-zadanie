import React, {ReactElement} from 'react'
import {ImAppleinc, ImAndroid} from 'react-icons/im'
import Button from './Button.component'
import Settings from '../common/settings'
import {BotNavConfigInt} from '../ts/interfaces'
import {RiArrowRightSLine} from 'react-icons/ri'


const BotNavElement = (props: BotNavConfigInt):ReactElement => {

    const {title, text, buttonConfig} = props

    return (
        <div className='navElement'>
          <div className='global--title__darkGrey global--title__medium'>{title}</div>
          <div className='global--paragraph global--paragraph__medium'>{text}</div>
          <div className='navElement--buttonContainer'> 
            {buttonConfig.map((singleButton, index) => (
              <Button key={index} linkTo={singleButton.linkTo} text={singleButton.text}>
                <div className='global--navButtonInside' >
                  {singleButton.androidIcon && <ImAppleinc size={Settings.baseThumbSize * 0.5} />}
                  {singleButton.iOSIcon  && <ImAndroid size={Settings.baseThumbSize * 0.5} />}
                  <span className='navElement--text'>{singleButton.text}</span>
                 <RiArrowRightSLine size={Settings.baseThumbSize * 0.5}/>
                </div>
              </Button>
            ))}
          </div>
        </div>
    )
}

export default BotNavElement;