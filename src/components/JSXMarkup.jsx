import React from 'react'

export default function JSXMarkup() {
    const name = 'Alice';
    const isLoggedin = false;
  return (
    <div>
      <h1>JSX markup</h1>
      {isLoggedin ? <p>Welcome {name}</p>:<p>Please login</p>}
    </div>
  )
}
