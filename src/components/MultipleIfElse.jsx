import React from 'react'

export default function MultipleIfElse() {
    let isLoggedin = true;
    let userRole = 'admin';
  return (
    <div>
      {
        isLoggedin && userRole === 'admin' ? <h1>Welcome Admin</h1> : 
        isLoggedin && userRole === 'user'  ? <h1>Welcome User</h1>  :
        <h1>Please Log in</h1>
      }
    </div>
  )
}
