import React from 'react'
import Header from './_components/Header/Header'
import Footer from './_components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
