import React, {ReactElement} from 'react'
import BotNavElement from './BotNavElement.component';
import {BotNavConfigInt} from '../ts/interfaces'

const BotNav = ():ReactElement => {

    const navConfig:BotNavConfigInt[] = [
      {
      id: 'navLeft',
      title: "Running out of products?", 
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      buttonConfig: [
        {linkTo: '/buynow', text: "Buy Now", androidIcon: false, iOSIcon: false},
      ],
    },{
      id: 'navMid',
      title: "Bod-e Trainer in your pocket", 
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      buttonConfig: [
        {linkTo: '/downloadios', text: "iOS", androidIcon: true, iOSIcon: false},
        {linkTo: '/downloadandroid', text: "Android", androidIcon: false , iOSIcon: true},
      ],
    },{
      id: 'navRight',
      title: "Frequently Asked Questions", 
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      buttonConfig: [
        {linkTo: '/buynow', text: "Read FAQs", androidIcon: false, iOSIcon: false},
      ],
    }
  ]


    return (
        <div className='botNav'>
          {navConfig.map((confItem) => <BotNavElement id={confItem.id} key={confItem.id} title={confItem.title} text={confItem.text} buttonConfig={confItem.buttonConfig} />)}
        </div>
    )
}

export default BotNav;