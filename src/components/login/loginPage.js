import React from 'react'
import './login.css'
import { useState } from 'react'

function LoginPage({handleSubmit}) {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const HandleSubmit = (event) => {
    event.preventDefault()
    handleSubmit(email,password)
  }
  return (
    <div>
    <form className='formClass' onSubmit={HandleSubmit}>
        <input type='text' value = {email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' className='emailInput'></input>
        <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' className='passwordInput'></input>
        <button type='submit'>Login</button>
    </form>
      
    </div>
  )
}

export default LoginPage
