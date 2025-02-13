import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Master from './components/Master'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Master></Master>
    </BrowserRouter>
  </StrictMode>,
)
