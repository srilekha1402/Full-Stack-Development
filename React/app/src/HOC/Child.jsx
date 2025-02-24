import React from 'react'
import Hoc from './Hoc'

// const Child = ({state,demo}) => {
//   return (
//     <div>
//       {/* <h1>My name is {name}</h1> //for 1st hoc code*/}
//       <h5>{state}</h5>
//       <button onClick={demo}>Click</button><br/>
//       {/* <button>{state}</button> */}
//     </div>
//   )
// }

// export default Hoc(Child)


// const Child = ({arr1}) => {
//   return (
//     <div>
//         {
//         arr1.map((x,index)=>{
//             return(
//                 <li key={index}>{x}</li>
//             )
//         })
//     }
//     </div>
//   )
// }

// export default Hoc(Child)


const Child = ({arr1}) => {
    return (
      <div>
         <table border={"1px solid"}> 
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr1.map((x)=>{
                        return(
                            <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.id}</td>
                                <td>{x.role}</td>
                            </tr>
                         )
                    })
                }
            </tbody>
         </table>
      </div>
    )
  }
  
  export default Hoc(Child)
  