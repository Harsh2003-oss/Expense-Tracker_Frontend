import React, { useState } from 'react'
import { registerUser } from '../api';

const Register = () => {

const [name,setName] = useState("");    
const[email,setEmail] = useState("");
const [password,setPassword] = useState("")

const submitHandler =async (e) =>{
e.preventDefault()
try {
  const result = await registerUser(name,email , password)
    console.log('success' , result)

} catch (error) { 
  console.log('error',error)
}
}
  return (
    <>
     
    <div  
     className=' app-background relative h-screen flex items-center justify-center' >

      <form  
      onSubmit={submitHandler}
       className='absolute w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4'>

<img className='h-40 ml-20 mb-10 w-40' src="src/assets/logo.png" alt="" />
    <h1 className='font-bold text-2xl mb-5'>Welcome to ExpenseTracker</h1>
<input
className='p-2 border-zinc-100 mb-4 border-2 rounded-4xl  '
value={name}
onChange={(e)=>setName(e.target.value)}
type="name" placeholder='Enter your name' />

<input
className='p-2 border-zinc-100 mb-4 border-2 rounded-4xl  '
value={email}
onChange={(e)=>setEmail(e.target.value)}
type="email" placeholder='Enter your email' />

<input
className='p-2 border-zinc-100 border-2 rounded-4xl   '
value={password}
onChange={(e)=>setPassword(e.target.value)}
type="password" placeholder='Enter your password' />
<button 
  className="p-2 rounded-4xl   bg-emerald-600 border-2 text-white rounded hover:bg-emerald-700"
type='submit'>Submit</button>
   <footer>
        <p className='text-sm'>
          By continuing, you agree to ExpenseTracker's
          <b>Terms of Service, Privacy policy.</b>
        </p>
        <hr />
        <a href="/login">Already on ExpenseTracker yet? Sign in</a>
      </footer>

      </form>
        
      </div>
    </>
  )
}

export default Register
