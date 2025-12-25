import React from 'react'

export default function PassJSXusingChildren() {
  return (
    <div>
      <h1>Hello user!</h1>
      <h1>Im passing jsx using children</h1>
    </div>
  )
}

function Child({children}){
    return(
        <>
        <h1>{children}</h1>
        </>
    )
}