//EXAMPLE FOR NO DEPENDENCY


// import React,{useEffect, useState} from 'react'

// const UseEffect = () => {
//     let [state,setState] =useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },9000);
//     })
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect


// -----------------------------------------------------------------------------------

//EMPTY DEPENDENCY

// import React,{useEffect, useState} from 'react'

// const UseEffect = () => {
//     let [state,setState] =useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },2000);
//     },[])
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

// -------------------------------------------------------------------------------------------

//DEPENDENCY WITH A VALUE

// import React,{useEffect, useState} from 'react'

// const UseEffect = () => {
//     let [state,setState] =useState(0)
//     let [increment,seIncrement]=useState(0)

//     useEffect(()=>{
//         seIncrement(()=>state*3)
//     },[state])

//   return (
//     <div>
//         {state}
//         <button onClick={()=>setState((e)=>e+1)}>Click</button>
//         {increment}
//     </div>
//   )
// }

// export default UseEffect


//---------------------------------------------------------------------
//FETCH API USING USEEFFECT HOOK

import React,{ useEffect , useState } from 'react'
import './useeffect.css'

const UseEffect = () => {
  let [state,setState]=useState([])
  console.log(state);
  

  useEffect(()=>{
    window.fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((res)=>setState(res))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Price</th>
            <th>image</th>
          </tr>
        </thead>
        {
          state.map((res)=>{
          // state.map((res)=>{
            console.log(res);
            return(
              <>
              <tr>
                <td>{res.id}</td>
                <td>{res.price}</td>
                <td><img src={res.image} alt="" /></td>
              </tr>
              </>
            )
          })
        }
      </table>
    </div>
  )
}

export default UseEffect
