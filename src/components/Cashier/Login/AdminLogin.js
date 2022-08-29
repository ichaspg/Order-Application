import React, { useState } from 'react'
import './admin.css'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/cashier')
  }
  return (
    <div className='admin-log-cont'>
      <h1>Employee Login</h1>
      <form action="" className='form-admin'>
        <label htmlFor="username">User Name
          <input 
          type="text" 
          placeholder='Username' 
          name='username' 
          className='txt-input'
          onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="passowrd">Password
          <input 
          type="text" 
          placeholder='Password' 
          name='password' 
          className='txt-input'
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link to={'/'}>Having Trouble Sign In ?</Link>
        <input type="submit" value="Sign In" className='admin-submit-btn' onClick={()=> handleSubmit()}/>
      </form>
    </div>
  )
}

export default AdminLogin