import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State from './state/State'

import States from './state/States'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <State/>
  </StrictMode>,
)
