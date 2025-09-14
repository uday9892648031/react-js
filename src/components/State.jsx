import React, { useState } from 'react'

export default function State() {
      // Declare a state variable named 'count' and a function to update it named 'setCount'

    const [count,setCount] = useState(0);
    const updateCount = () =>{
        // Call the state updater function to change the value
        setCount(count + 1)
    }
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>updateCount()}>Click me</button>
    </div>
  )
}
