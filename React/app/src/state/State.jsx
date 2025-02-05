import React, { useState } from "react";
import video1 from './1.mp4';

const State=()=>{
    let [state,setState]=useState(true)

    let demo=()=>{
        let demo1 = document.getElementById("demo");
        console.log(demo);
        setState(!state)
        state==true ? demo1.play() : demo1.pause()
        
    }

    return(
        <div>
            <video src={video1} id="demo" onClick={demo}></video>
        </div>
    )
}
export default State;

