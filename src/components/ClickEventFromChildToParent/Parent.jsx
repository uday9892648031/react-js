import React from 'react'
import Child from './Child'

export default function Parent() {
    function ParentClick(){
        console.log("clicked from child")
    }
  return (
    <div>
      <Child onClickHandler={ParentClick} />
    </div>
  )
}
