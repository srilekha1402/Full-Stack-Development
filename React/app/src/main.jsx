import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import CompA from './usecontext/CompA'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompA/>
  </StrictMode>,
)
 