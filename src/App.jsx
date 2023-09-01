import { useState } from 'react'
import Login from './Component/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './Component/Signup'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/Signup' element={<Login/>}/>
<Route path='/signin' element={<Signup/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
