import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import JuniorDetails from './pages/JuniorDetails.tsx'
import DefaultDetails from './pages/DefaultDetails.tsx'

const path = window.location.pathname
let Page = App
if (path === '/details-junior') {
  Page = JuniorDetails
} else if (path === '/details') {
  Page = DefaultDetails
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
