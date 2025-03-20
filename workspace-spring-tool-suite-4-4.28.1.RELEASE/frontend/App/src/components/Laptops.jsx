import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./laptop.css"

const Laptops = () => {
    let [laptop , setLaptop] = useState([])

    let laptops = async() => {
       let res = await axios.get("http://localhost:8088/laptops")
       console.log(res.data);
       setLaptop(res.data)
    }


    useEffect(() => {
        laptops()
    },[])

    let fetchData=(res)=>{
      console.log(res);
    }

  return (
    <div>
        {
            laptop.map((value , index) => {
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

export default Laptops