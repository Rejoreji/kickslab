import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    {/* Header Components */}
    <Header/>
    {/* Main content */}
    <main>
        <Outlet/>
    </main>
   {/* Footer */}
    <Footer/>
    </>
  )
}

export default UserLayout
