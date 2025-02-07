// import React,{useRef} from 'react'

// const Ref = () => {    
//     let demo1 = useRef()
//     let eventHandler = ()=>{
//         demo1.current.style.backgroundColor='blue';
//     }
//   return (
//     <div>
        
//         <h2 ref={demo1}>hi</h2>
//         <button onClick={eventHandler}>click</button>
//     </div>
//   )
// }

// export default Ref


// import React,{useRef} from 'react'

// const Ref = () => {
//     let demo = useRef();
    
//     demo.current.style.backgroundColor='red'
    
//   return (
    
//     <div>
//       <h1 ref={demo}>Hello  World</h1>
//     </div>
//   )
// }

// export default Ref

import React, { useRef } from 'react'

const Ref = () => {
    let name=useRef('')
    let password=useRef('')
    let demo=(e)=>{
        e.preventDefault();
        console.log({name:name.current.value});
        console.log({password:password.current.value});
        
        
    }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type='text' name='name' id='name' ref={name}/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input type='passsword' name='password' id='password' ref={password}/>
        <br/><button type='submit' onClick={demo}>Submit</button>
      </form>
    </div>
  )
}

export default Ref
