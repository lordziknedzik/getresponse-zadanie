import React, {ReactElement} from 'react'
import {Link} from 'react-router-dom'

import Settings from '../common/settings'

interface propsInt {
  text: string
  linkTo: string
  children: ReactElement
}

const Button = (props: propsInt):ReactElement => {

    const {text, linkTo} = props
    return (
        <Link to={linkTo} className='global--navButton'>
          {props.children}
        </Link>
    )
}

export default Button;