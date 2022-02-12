import React, {ReactElement} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Settings from '../common/settings'
import { Link } from 'react-router-dom';

interface propsInt {
  showBurger: boolean
  toggleBurger: () => void
}

const BurgerMenu = (props: propsInt):ReactElement => {

    const {showBurger, toggleBurger} = props

    
    return (
        <div className={`burger ${showBurger && 'burger--open'}`}>
          <AiOutlineClose onClick={() => toggleBurger()} color={Settings.primaryColor} size={Settings.baseThumbSize} />
            <Link className='header--link' to='/'>Dashboard</Link>
            <Link className='header--link' to='/recipies'>Recipies</Link>
            <Link className='header--link' to='/challenge'>Challenge</Link>
        </div>
    )
}

export default BurgerMenu;