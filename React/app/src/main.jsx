import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import External from './style/External'
import Ref from './useref/Ref'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ref/>
 
  {/* <External/> */}
  </StrictMode>,
)
 