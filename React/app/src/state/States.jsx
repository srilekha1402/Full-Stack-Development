import React,{useState} from 'react'

const States = () => {
    let[state,setState]=useState("batch6");
    console.log(state);
    console.log(setState);

    let demo=function(){
        setState("batch5")
    }
  return (
    <div>
      {state}
      <button onClick={demo} >Click</button>
    </div>
  )
}

export default States
