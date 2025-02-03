import React from "react";

class BiodataChild extends React.Component{
    render()
    {
        return(
            <div>
            <h3>BIO DATA THROUGH PROPS</h3>
            <h5>I am {this.props.name} and I am {this.props.age} years old. I am currently living in {this.props.address}. I was born on {this.props.dob}. My parents are {this.props.Father_name} and {this.props.Mother_name}.</h5>
           
            <button onClick={()=>this.props.fun()}>Click</button>
            
            <h4>{this.props.arr}</h4>
            </div>
            
        )
    }
}
export default BiodataChild;