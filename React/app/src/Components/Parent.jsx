<<<<<<< HEAD:React/app/src/Components/Parent.jsx
import React from "react";
import Child from "./Child";
class Parent extends React.Component{
    state={
        username:"Srilekha"
    }
    render(){
        return(
            <Child name={this.state.username}/>


        )
    }
}
=======
import React from "react";
import Child from "./Child";
class Parent extends React.Component{
    state={
        username:"Srilekha"
    }
    render(){
        return(
            <Child name={this.state.username}/>


        )
    }
}
>>>>>>> 4bed25bed462096984cce73f2b5230e98397759a:React/DAY1/app/src/Components/Parent.jsx
export default Parent;