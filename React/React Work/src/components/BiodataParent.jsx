import React from "react";
import BiodataChild from "./BiodataChild";
class BiodataParent extends React.Component{
    state={
        username:"Jaligam Srilekha",
        age:19,
        DOB:"14 Febraury 2005",
        address:"Sreepuram, Kurnool, Andhra Pradesh, 518220",
        Father_name:"Mr Jaligam Chandra Shekar",
        Mother_name : "Mrs Deepika Uma Maheswari",
        Phone:7989613330,
        email:"srilekhajaligam7@gmail.com"
    }
    func = function(){
        window.alert("This is from class based function");
    }
    render(){
        return(
            <BiodataChild name={this.state.username} 
            age={this.state.age}
            dob={this.state.DOB}
            Father_name={this.state.Father_name}
            Mother_name={this.state.Mother_name}
            phone={this.state.Phone}
            email={this.state.email}
            address={this.state.address} fun={this.func} arr={[10,20,30]}/>

            //to pass function
            // <BiodataChild fun={this.func}/>


        )
    }
}
export default BiodataParent;