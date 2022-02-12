import React, {ReactElement, useState} from 'react'
import HeaderNav from './HeaderNav.component'
import HeaderUser from './HeaderUser.component'
import BurgerMenu from './BurgerMenu.component'
import {GiHamburgerMenu} from 'react-icons/gi'
import Settings from '../common/settings'


const Header = ():ReactElement => {

    const [toggleBurger, setToggleBurger] = useState<boolean>(false)

    const handleBurgerClose = () => setToggleBurger((prevState) => !prevState)
 
    return (
        <div className='header'>
          <GiHamburgerMenu onClick={() => handleBurgerClose()} color={Settings.greyColor} size={Settings.baseThumbSize} className='global--showForSmall'/>
          <div className='header--empty' />
          <BurgerMenu toggleBurger={handleBurgerClose} showBurger={toggleBurger} />
          <HeaderNav />
          <HeaderUser />
        </div>
    )
}

export default Header;