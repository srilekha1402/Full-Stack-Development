import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'

const Master = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default Master
