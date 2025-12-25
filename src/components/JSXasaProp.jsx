import React from 'react'

export default function JSXasaProp() {
    const headerText = <h1>Header Text</h1>
  return (
    <div>
      <HeaderText content={headerText} />
    </div>
  )
}

function HeaderText({content}){
return(<div>
<p>{content}</p>
</div>)
}
