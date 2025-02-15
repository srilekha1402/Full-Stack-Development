import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home.jsx';
import Edit from './components/Edit.jsx';
import Create from './components/Create.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/edit' element={<Edit></Edit>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
