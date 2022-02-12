import React, {ReactElement} from 'react'
import { Link } from 'react-router-dom';

const HeaderNav = ():ReactElement => {

    

    return (
        <nav className='header--nav global--hideForSmall'>
            <Link className='header--link' to='/'>Dashboard</Link>
            <Link className='header--link' to='/recipies'>Recipies</Link>
            <Link className='header--link' to='/challenge'>Challenge</Link>
        </nav>
    )
}

export default HeaderNav;