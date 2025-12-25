import React from 'react'

export default function PassJSXInline() {
  return (
    <div>
      <Child content={<h1>Pass jsx inline</h1>} />
    </div>
  )
}


function Child({content}){
    return(
        <h1>{content}</h1>
    )
}