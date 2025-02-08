import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Me from './components/Me';
import Parent from './components/Parent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Me/>
  <Parent/>
  </StrictMode>,
)
