import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <h3>Login Form</h3>
        <p><input type="text" placeholder='Email' /></p>
        <p><input type="password" placeholder='Password' /></p>
        <button>Login</button>
        <p><Link to="/register">New User Register Here</Link></p>
    </div>
  )
}
