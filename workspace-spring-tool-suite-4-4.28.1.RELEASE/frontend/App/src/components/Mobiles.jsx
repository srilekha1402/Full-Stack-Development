import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./laptop.css"

const Mobiles = () => {
    let [Mobiles , setMobiles] = useState([])

    let mobiles = async() => {
       let res = await axios.get("http://localhost:8088/mobiles")
       console.log(res.data);
       setMobiles(res.data)
    }


    useEffect(() => {
        mobiles()
    },[])

    let fetchData=(res)=>{
      console.log(res);
    }

  return (
    <div>
        {
            Mobiles.map((value , index) => {
             return(
                <div id='parent' key={index} onClick={()=>{fetchData(value)}}>
                    <img src={value.pimage} alt=""/>
                    <h3>{value.pname}</h3>
                    <h3>{value.pcost}</h3>
                </div>
             )
            })
        }
    </div>
  )
}

export default Mobiles