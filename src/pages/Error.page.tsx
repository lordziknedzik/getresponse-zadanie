import React, {ReactElement} from 'react'

const Error = (props: {errorCode: string}):ReactElement => {

    const {errorCode} = props
    
    return (
        <div className='error'>
          {errorCode}
        </div>
    )
}

export default Error;