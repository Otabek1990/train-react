import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Help() {
  return (
    <div className='h-[300px] bg-slate-500 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>help sahifasi</h1>

      <Link to="clients">Clients</Link>
      <hr />
      <hr />
      <Outlet/>
    </div>
  )
}

export default Help