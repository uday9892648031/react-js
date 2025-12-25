import React from 'react'

export default function ClickEventWithEventObject() {
    const message = (e) =>{
        console.log(e.target.innerText)
    }
  return (
    <div>
      <button onClick={message}>Click me</button>
    </div>
  )
}
