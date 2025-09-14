import React from 'react'

// export default function ClickEvent() {
// const handleClick = () =>{
//     alert("Button clicked")
// }
//   return (
//     <div>
//         <h1>Button click</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

export default function ClickEvent(){
    const handleClick = (name) =>{
        alert(`Hello ${name}`)
    }
    return(
        <div>
            <h1>Button click</h1>
            <button onClick={()=>handleClick('alice')}>Click me</button>
        </div>
    )
}
