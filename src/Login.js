import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const checkLogin = true
        if(checkLogin){
            navigate("/dashboard")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <button type='submit'>Login</button>
    </form>
    )
}