import React, { useState } from 'react'

const Login = () => {
const[username,setUserName] = useState(" ");
const [password,setPassword] = useState(" ")

const submitHandler =(e) =>{
e.preventDefault()
}
  return (
    <>
      <form>
<input
value={username}
onChange={(e)=>setUserName(e.target.value)}
type="text" placeholder='Enter your name' />

<input type="text" placeholder='Enter your password' />
<button onSubmit={(e)=>{submitHandler}}>Submit</button>
      </form>
    </>
  )
}
export default Login
