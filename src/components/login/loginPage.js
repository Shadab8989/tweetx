import React from 'react'
import './login.css'
import { useState } from 'react'

function LoginPage() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <div>
    <form className='formClass'>
        <input type='email' value = {email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' className='emailInput'></input>
        <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' className='passwordInput'></input>
        <button>Login</button>
    </form>
      
    </div>
  )
}

export default LoginPage
