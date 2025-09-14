import React, { useState } from 'react'

export default function Toggler() {
      // 1. Initialize a state variable to track visibility
    const [visible,setisVisible] = useState();
      // 2. Define a function to toggle the state
    const handleClick = () =>{
        setisVisible(!visible)
    }
  return (
    <div>
        {
            visible ? <h1>Hide Element</h1> : null
        }
      <button onClick={()=>handleClick()}>
        {
            visible ? 'Hide' : 'Show'
        }
      </button>
    </div>
  )
}
