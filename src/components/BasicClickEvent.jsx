import React from 'react'

export default function ClickEvent() {
    function handleClick(){
        console.log("Button clicked!")
    }
  return (
    <div>
      {/* Basic Click Event */}
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
