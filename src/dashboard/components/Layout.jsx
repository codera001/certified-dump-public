import React from 'react'
import Nav from './Nav/Nav'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <main>{ children }</main>
    <Sidebar />
    <Footer />
    </>
  )
}

export default Layout