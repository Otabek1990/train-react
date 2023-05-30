import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='flex flex-col items-center p-10'>
      <h1>Login sahifa</h1>
      <form action="">
        <input type="text" className='border p-3 border-black' />
      </form>
      <h2>Hali ruyhatdan otmaganmisiz? 
        <NavLink className={"text-blue-800 font-bold"} to="/register">Register</NavLink>
      </h2>
    </div>
  )
}

export default Login