import React, { useState } from 'react'

export default function ClickEventWithStateUpdate() {
    const [count,setCount] = useState(0)
    function clickme(){
        setCount(count + 1)
    }
  return (
    <div>
        <p>{count}</p>
      <button onClick={clickme}>Click me</button>
    </div>
  )
}
