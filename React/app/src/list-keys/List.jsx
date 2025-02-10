// import React, { Fragment } from 'react'

// const List = () => {
//     let arr = [10,20,30,40];
//     console.log(arr);
//     let num=0
//     console.log(num);
    
    
//   return (
//     <Fragment>
//         {
//             arr.map((x)=>{
//                 console.log(x);
//                 console.log(`<li key=${num++}>x</li>`);
                
                
//                 return(
//                     <li key={num++}>{x}</li>
//                 )
//             })
//         }
//     </Fragment>
//   )
// }

// export default List



// import React, { Fragment } from 'react'

// const List = (props) => {
//     console.log(props);
//     console.log(props.main);
    
//   return (
//     <Fragment>
//         {
//             props.main.map((x)=>{
//                 return(
//                     <>
//                     <ol>
//                         <li key={x.id}>{x.name}</li>
//                     </ol>
//                     </>
//                 )
//             })
//         }
//     </Fragment>
//   )
// }

// export default List

import React, { Fragment } from 'react'

const List = (props) => {
    console.log(props);
    console.log(props.main);
  return (
    <Fragment>
        {
            props.main.map((x)=>{
                return(
                   <Fragment key={x.id}>
                    <li>{x.name}</li>
                   </Fragment>

                )
            })
        }
    </Fragment>
  )
}

export default List
