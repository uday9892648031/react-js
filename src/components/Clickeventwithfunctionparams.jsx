import React from 'react'

export default function Clickeventwithfunctionparams() {
    function message(name){
      console.log(name)
    }
  return (
    <div>
      <button onClick={()=>message('Hello Uday')}>Click me</button>
    </div>
  )
}
