import React, {createContext} from 'react'
import UserContextProvider from './UserProvider.contexts';
import DietContextProvider from './DietProvider.contexts';

export const GlobalContext = createContext<any>(null);

const GlobalContextProvider = (props:any):React.ReactElement => {


  return (
    <GlobalContext.Provider value={{}}>
      <UserContextProvider>
        <DietContextProvider >
          {props.children}
        </DietContextProvider>
      </UserContextProvider>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;