import React, {ReactElement, useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../contexts/UserProvider.contexts'

const NotLogged = ():ReactElement => {

    
    const navigate = useNavigate()
    const {isLogged} = useContext(UserContext)
    
    useEffect(() => {
      if (isLogged) navigate('/')
    },[isLogged])


    return (
        <div className='notLogged'>
          Zaloguj się, żeby zobaczyć dane
        </div>
    )
}

export default NotLogged;