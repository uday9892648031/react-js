import React from 'react'

export default function PropsExample({ name }) {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}


{/* <PropsExample name="Alice" />
      <PropsExample name="Bob" />
      <PropsExample name="Charlie" /> */}

//   Pass it in App.js