import React from 'react'

export default function PassCmpAsJsxProp() {
  return (
    <div>
      <Layout content={<Header />} />
    </div>
  )
}

function Header(){
    return(
        <>
        <h1>Header component</h1>
        </>
    )
}

function Layout({content}){
    return(
        <>
        <h1>{content}</h1>
        </>
    )
}