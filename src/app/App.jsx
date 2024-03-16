

import DrawerNav from '../component/DrawerNav/DrawerNav'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import './App.css'
import { Routes, Route,  Navigate } from 'react-router-dom'
import { useState,useEffect } from 'react'


function App() {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('stmToken')
    console.log(key);

    if (key !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <>
      {
        login ?
          <DrawerNav />
          :
         
            <Routes>
              <Route path='*' element={<Navigate to={'/home'} />} />
              <Route path={'/home'} element={<Home />} />
              <Route path={'/login'} element={<Login />} />
            </Routes>
         


      }

    </>
  )
}

export default App
