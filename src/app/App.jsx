

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import './App.css'
import {Routes,Route,Link,Navigate} from 'react-router-dom'

function App() {

  return (
    <>
        
          <Routes>
            <Route path='*' element={<Navigate to={'/home'} />} />
            <Route path={'/home'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
          </Routes>
      
    </>
  )
}

export default App
