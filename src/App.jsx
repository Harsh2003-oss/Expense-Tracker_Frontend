import React from 'react'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';

const App = () => {
  return (
    <Routes>
   <Route path='/Login' element={<Login />}></Route>
  
   <Route path='/Register' element={<Register />}></Route>
    </Routes>
  )
}

export default App
