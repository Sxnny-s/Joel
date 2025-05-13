import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

//redux
import { Provider } from 'react-redux'
import store from './store'




// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' >
      <BrowserRouter>
      
      <Provider store={store}>
        <App />
      </Provider>

      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
