import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import External from './style/External'
import List from './list-keys/List'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
 <List/>
  {/* <External/> */}
  </StrictMode>,
)
 