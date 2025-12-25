import React from 'react'

export default function Child({onClickHandler}) {
  return (
    <div>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  )
}
