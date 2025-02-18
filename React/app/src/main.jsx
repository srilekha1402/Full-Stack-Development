import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
import Child from './HOC/Child'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Child/>
  </StrictMode>,
)
  