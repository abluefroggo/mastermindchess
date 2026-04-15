import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './sections/About.jsx'

const path = window.location.pathname.replace(/\/+$/, "") || "/"
const CurrentPage = path === "/about" ? About : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>,
)
