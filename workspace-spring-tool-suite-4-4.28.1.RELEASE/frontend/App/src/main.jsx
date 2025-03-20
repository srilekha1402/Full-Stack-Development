import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Master from './components/Master.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Master/>
    </BrowserRouter>
  </StrictMode>,
)
