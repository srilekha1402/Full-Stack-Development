import React from 'react'
import {Route,Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Laptops from './Laptops'
import Error from './Error'
import Login from './Login'
import Mobiles from './Mobiles'
const Master = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/laptops' element={<Laptops/>}></Route>
        <Route path='/dashboard/mobiles' element={<Mobiles/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default Master
