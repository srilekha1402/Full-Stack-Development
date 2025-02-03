// import React from 'react';
// import Child from './Child';
// class Parent extends React.Component{
//     state={
//         username:"Jaligam Srilekha."
//     }
//     render(){
//         return(
//            <Child name={this.state.username}/>
//         )
//     }
// }
// export default Parent;

import React from 'react'
import Child from './Child'
const Parent = () => {
    let state={
        Name:"Jaligam Srilekha",
        Id: "2211cs010668",
        Designation:"Student"
    }

    let func = function(){
        
        window.alert("This is function.")
        
    }
  return (
    
    <div>
      {/* <Child name="srilekha"  age={19}/> */}
      {/* <Child age={19} /> */}
       {/* <Child arr={[10,20,30]}/> */}
       {/* <Child name = {this.state.Name} id={this.state.Id} designation={this.state.Designation}/> */}
       {/* <Child obj={state}/> */}
       <Child obj1 = {func}/>
       {/* <Child obj={{name:"sri",id={668},designation="Developer"}} */}
    </div>
   
    
  )
}

export default Parent
