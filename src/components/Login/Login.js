import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginbg from '../../assets/bglogin.png'
import './login.css'
import axios from 'axios'

const Login = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [tablenumber,setTableNumber] = useState('');
    const method = ''
    const order = [{}]
    const navigate = useNavigate()

    //=================Submit (POST ke API & Local Storage) ========================
    const handleSubmit = (event) => {
        const userData = {name,email,tablenumber,method,order}
        axios.post('http://localhost:8000/user',userData).then((response) => {
          localStorage.setItem('user', JSON.stringify(userData))
          console.log(response.status)
          console.log(response.data)
        })
        navigate('/menu')
    }
    //============================================================================
  return (
    <div className='login-cont'>
        <img src={loginbg} alt="loginbg" className='login-bg'/>
        <div className="form-cont">
            <p className='form-title'>Welcome to Kona</p>
            <article>Please fill out the following form</article>
            <form className='form' onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    value={name}
                    placeholder='Name'
                    className='input-txt'
                    required
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    value={email}
                    placeholder='Email'
                    className='input-txt'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="text" 
                    value={tablenumber}
                    placeholder='Table Number'
                    className='input-txt'
                    required
                    onChange={(e) => setTableNumber(e.target.value)}
                    />
                    <input type="submit" className='submit-btn' value={'Start Ordering'} />
            </form>
        </div>
    </div>
  )
}

export default Login