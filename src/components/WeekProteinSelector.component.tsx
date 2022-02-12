import React, {ReactElement, useState} from 'react'
import {FaCheese} from 'react-icons/fa'
import {IoFish} from 'react-icons/io5'
import {GiBroccoli, GiChickenOven, GiMeat} from 'react-icons/gi'
import {proteinOptions} from '../ts/types'
import Settings from '../common/settings'


const WeekProteinSelector = ():ReactElement => {

    const {yellowCheeseColor, redMeatColor, blueFishColor, greenVegetableColor, chickenColor, greyColor, baseThumbSize} = Settings

    const starterProtein: proteinOptions = {
        vegetables: true,
        cheese: true,
        redMeat: true,
        fish: true,
        chicken: true,
    }

    const [protein, setProtein] = useState<proteinOptions>(starterProtein)
    
    const handleProteinChange = (proteinName: string):void => setProtein((prevState) => ({...prevState, [proteinName]: !prevState[proteinName as keyof proteinOptions ]}))

    return (
        <div className='week--container week--protein'>
            <div className='week--progressText'>Select your protein options </div>
            <div className='week--proteins'>
                <FaCheese className='global--clickable' onClick={()=> handleProteinChange("cheese")} size={baseThumbSize} color={protein.cheese ? yellowCheeseColor :greyColor}/>
                <GiMeat className='global--clickable' onClick={()=> handleProteinChange("redMeat")} size={baseThumbSize} color={protein.redMeat ? redMeatColor : greyColor}/>
                <IoFish className='global--clickable' onClick={()=> handleProteinChange("fish")} size={baseThumbSize} color={protein.fish ? blueFishColor : greyColor}/>
                <GiBroccoli className='global--clickable' onClick={()=> handleProteinChange("vegetables")} size={baseThumbSize} color={protein.vegetables ? greenVegetableColor : greyColor}/>
                <GiChickenOven className='global--clickable' onClick={()=> handleProteinChange("chicken")} size={baseThumbSize} color={protein.chicken ? chickenColor : greyColor}/>
            </div>
        </div>
    )
}

export default WeekProteinSelector;