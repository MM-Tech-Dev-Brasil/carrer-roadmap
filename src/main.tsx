import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import JuniorDetails from './pages/JuniorDetails.tsx'
import DefaultDetails from './pages/DefaultDetails.tsx'

const path = window.location.pathname
const pages: Record<string, ComponentType> = {
  '/details-junior': JuniorDetails,
  '/details': DefaultDetails,
}
const Page = pages[path] ?? App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
