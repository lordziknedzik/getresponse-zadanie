import React, {ReactElement, useContext} from 'react';
import {Route, Routes} from 'react-router-dom'
import Calendar from './pages/Calendar.page';
import Error from './pages/Error.page';
import NotLogged from './pages/NotLogged.page';
import UnderConstruction from './pages/UnderConstruction.page';
import User from './pages/User.page';
import Header from './components/Header.component';
import BotNav from './components/BotNav.component';
import './styles/index.scss'
import {UserContext} from './contexts/UserProvider.contexts'
import { DietContext } from './contexts/DietProvider.contexts';


const App = ():ReactElement => {

  const {isLogged} = useContext(UserContext)

  return (
    
      <div className="app">
        <Header />

        {!isLogged && <NotLogged />}

        {isLogged && 
          <Routes>
            <Route path='/' element={<Calendar />}/>
            <Route path='/user' element={<User />}/>
            <Route path='/login' element={<NotLogged />} />
            <Route path='/*' element={<UnderConstruction />}/>
          </Routes>
        }
        <BotNav />
      </div>

  );
}

export default App;
