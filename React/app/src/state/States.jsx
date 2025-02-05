import React,{useState} from 'react'

const States = () => {
    // let[state,setState]=useState("batch6");
    // console.log(state);
    // console.log(setState);

    let [name,setName]=useState()
    let [password,setPassword]=useState()


    // let demo=function(){
    //     setState("batch5")
    // }

    let demo1=(e)=>{
      e.preventDefault();
      console.log({name,password});
      name=="admin"&&password=="12345" ?
        window.open("https://google.com"):window.location.reload()
    }
    let increment=(e)=>{
      e.preventDefault();
      
    }
      
    
  return (
    // <div>
    //   {state}
    //   <button onClick={demo} >Click</button>
    // </div>
    <div>
      <form action="">
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>

        <br/>

        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <br/>

        <button onClick={demo1}>Submit</button>
      </form>
    </div>
  )
}

export default States
