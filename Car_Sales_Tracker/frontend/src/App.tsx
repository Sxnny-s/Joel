 
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



import { ThemeProvider } from "./components/ui/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <header>
    
      <SignedOut>
  
      </SignedOut>
      <SignedIn>
 
        <UserButton />
      </SignedIn>
    </header>



    <Routes>
      <Route path='/' element={<Dashboard/> } />
    </Routes>
    </ThemeProvider>


    </>
  )
}

export default App
