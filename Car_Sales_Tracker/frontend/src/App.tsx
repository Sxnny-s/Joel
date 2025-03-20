import './App.css'
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {

  return (
    <>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
 
        <UserButton />
      </SignedIn>
    </header>
    <Routes>
      <Route path='/' element={<Dashboard/> } />
    </Routes>


    </>
  )
}

export default App
