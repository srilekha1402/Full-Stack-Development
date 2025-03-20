import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let name =useRef()
    let password = useRef()
    let navigate = useNavigate()
    let login=(e)=>{
        e.preventDefault()
        name.current.value === 'admin' && password.current.value === 'admin@123' ? navigate("dashboard"):navigate("error")

    }
  return (
    <div>
      <form action="">
        name: <input type="text" name='' id=''  ref={name}/>
        <br/>
        password : <input type="password" name='' id='' ref={password} />
        <br/>
        <button onClick={login}>Submit</button>
      </form>
    </div>
  )
}

export default Login
