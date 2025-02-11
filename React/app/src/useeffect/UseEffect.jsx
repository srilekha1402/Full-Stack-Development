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

import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    let [state,setState] =useState(0)
    let [increment,seIncrement]=useState(0)

    useEffect(()=>{
        seIncrement(()=>state*3)
    },[state])

  return (
    <div>
        {state}
        <button onClick={()=>setState((e)=>e+1)}>Click</button>
        {increment}
    </div>
  )
}

export default UseEffect


