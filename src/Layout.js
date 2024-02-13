import React, { Children } from 'react'
import { LayoutProvider } from './Context/LayouContext'
import Topbar from './Global/Topbar'
import Navbarr from './Global/Navbar'
const Layout = ({children}) => {
  return (
   <>
   <LayoutProvider>
   
    <Navbarr/>
    {children}
   </LayoutProvider>
   </>
  )
}

export default Layout