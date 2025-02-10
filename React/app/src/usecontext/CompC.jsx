import React from 'react'
import { user,id } from './CompA'

const CompC = () => {
  return (
    <div>
        {
          <user.Consumer>
            {
                (name)=>{
                    return(
                        <>
                        {
                        <id.Consumer>
                            {
                                (num)=>{
                                    return(
                                    <>
                                    <h1>My name is {name} and my id is {num} </h1>
                                    
                                    </>
                                    )
                                }
                            }
                        </id.Consumer>
                        }
                        </>
                    )
                }
            }
          </user.Consumer>
        }
    </div>
  )
}

export default CompC
