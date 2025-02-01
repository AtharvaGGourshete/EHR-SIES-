import Nav from '../components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <div className='bg-white'>
     
     <main className='min-h-screen'>
      <Nav/>

      <Outlet />
     </main>
    </div>
  )
}

export default AppLayout
