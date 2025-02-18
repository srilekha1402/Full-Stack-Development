// import React from "react"

import { useState } from "react";

// let Hoc=(OriginalComponent)=>{
//     let newComponent=()=>{
//         return <OriginalComponent name="Sri"/>
//     }
//     return newComponent
// }
// export default Hoc


// let Hoc=(OriginalComponent)=>{
//     let newComponent=()=>{
//         let [state,setState]=useState(0);
//         let demo=()=>{
//             setState(state+1)
//         }
//         return <OriginalComponent state={state} demo={demo}/>
//     }
//     return newComponent
// }
// export default Hoc;




// let Hoc=(OriginalComponent)=>{
//     let newComponent=()=>{
//         let arr=[10,20,30,40]
//         return <OriginalComponent arr1={arr}/> 
//     }
//     return newComponent
// }
// export default Hoc;



let Hoc=(OriginalComponent)=>{
    let newComponent=()=>{
        let arr=[
            {
                name:"Sri",
                id:1,
                role:"developer"
            },
            {
                name:"Lekha",
                id:2,
                role:"Pilot"
            }
        ]
        return <OriginalComponent arr1={arr}/> 
    }
    return newComponent
}
export default Hoc;