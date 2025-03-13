import './App.css'
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
