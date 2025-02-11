// import React from 'react'
// import { user,id } from './CompA'

// const CompC = () => {
//   return (
//     <div>
//         {
//           <user.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <>
//                         {
//                         <id.Consumer>
//                             {
//                                 (num)=>{
//                                     return(
//                                     <>
//                                     <h1>My name is {name} and my id is {num} </h1>
                                    
//                                     </>
//                                     )
//                                 }
//                             }
//                         </id.Consumer>
//                         }
//                         </>
//                     )
//                 }
//             }
//           </user.Consumer>
//         }
//     </div>
//   )
// }

// export default CompC




import React, { useContext } from 'react'
import { username ,id} from './CompA'


const CompC = () => {
  let name = useContext(username)
  let id1=useContext(id);
  return (
    <div>
      <h1>I am {name} and my id is {id1}</h1>
    </div>
  )
}

export default CompC
