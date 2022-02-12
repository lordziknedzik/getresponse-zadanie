import React, {ReactElement, useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Settings from '../common/settings'
import {UserContext} from '../contexts/UserProvider.contexts'
import {BsPersonCircle} from 'react-icons/bs'
import {RiArrowDownSLine} from 'react-icons/ri'

const HeaderUser = ():ReactElement => {

    const navigate = useNavigate()
    const {isLogged, handleIsLoggedChange} = useContext(UserContext)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    
    const handleLoginStateChangeButton = (redirectTo: string):void => {
        navigate(redirectTo)
        handleIsLoggedChange()
        setMenuOpen(false)
    }


    return (
        <div className='header--user global--paragraph'>
            {isLogged && 
                <div className='header--userContainer'>
                    <BsPersonCircle size={Settings.baseThumbSize * 0.75} color={Settings.greyColor}/>
                    <div className='header--userName'>Jan Nowak</div>
                    <RiArrowDownSLine size={Settings.baseThumbSize * 0.5} className={`global--rotation ${menuOpen && 'global--rotation__open'}`} onClick={() => setMenuOpen((prevState:boolean) => !prevState)}/>
                    
                    {menuOpen && <div className='header--userOptions'>
                        <div onClick={() => handleLoginStateChangeButton('/login')} className='global--button'>Wyloguj się</div>
                    </div>
                    }
                </div>  
                }
            {!isLogged && 
                <div onClick={() => handleLoginStateChangeButton('/')} className='global--button'>
                    zaloguj się
                </div>
                }

        </div>
    )
}


export default HeaderUser;