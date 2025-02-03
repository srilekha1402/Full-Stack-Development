// import React from "react";
// class Child extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>I am {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child;

import React from 'react'

const Child = (props) => {
    // console.log(props.arr);
    // console.log(props.obj);
    // let {Name,Id,Designation}=props.obj;
    // console.log(Name);
    // console.log(Id);
    // console.log(Designation);
    console.log(props.obj1)
    
  return (
    <div>
      {/* <h1>My name is {props.name} and my age is {props.age}</h1> */}
      {/* <h1>{props.arr}</h1> */}
      {/* <h5>I am {Name} holding id {Id} and I am a {Designation}</h5> */}
      <button onClick={()=>props.obj1()}>Click</button>
    </div>
  )
}

export default Child
