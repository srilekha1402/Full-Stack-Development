import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import State from './state/State'
import '../src/style/globally.css'
import Comp1 from './style/Comp1'
import Comp2 from './style/Comp2'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Comp1/> 
  <Comp2/> 
  
  </StrictMode>,
)
