import React, { Children } from 'react'
import { LayoutProvider } from './Context/LayouContext'
import Topbar from './Global/Topbar'
import Navbarr from './Global/Navbar'
import Footer from './Global/Footer'
const Layout = ({children}) => {
  return (
   <>
   <LayoutProvider>
   
    <Navbarr/>
    {children}
    <Footer/>
   </LayoutProvider>
   </>
  )
}

export default Layout