import React, { useState, createContext} from 'react'

interface UserContextInt {
  isLogged: boolean,
  handleIsLoggedChange: () => void
}

export const UserContext = createContext<UserContextInt | any>(null);

const UserContextProvider = (props:any):React.ReactElement => {

  const [isLogged, setIsLogged] = useState<boolean>(true)

  const handleIsLoggedChange = ():void => {
    setIsLogged((prevState: boolean) => !prevState)
  }
  return (
    <UserContext.Provider value={{isLogged, handleIsLoggedChange}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;