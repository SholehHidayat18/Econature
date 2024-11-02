import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './navbar.jsx'
import Section from './landingpage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Section />
    {/* <App /> */}
  </StrictMode>,
)
