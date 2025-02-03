import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Me from './components/Me';
import BiodataParent from './components/BiodataParent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Me/>
   <BiodataParent/>
  </StrictMode>,
)
