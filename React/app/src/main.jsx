import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fbc from './Components/Fbc.jsx';
import Cbc from './Components/Cbc.jsx';
import Demo from './Components/Demo.jsx';
import Parent from './Components/Parent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc/>
    <Fbc/>
    <Demo/>
    <Parent/>
  </StrictMode>,
)
