import React from 'react'
import '../../App.css'

import {SidebarCheckBoxLayoutProvider} from '../../Context/SidebarCheckBoxLayout'
import SidecheckBoxBar from '../SideCheckBox/SidecheckBoxBar'
import { Container } from 'react-bootstrap'
const SideCheckbLayout = ({children}) => {
  return (
   <>
  <SidebarCheckBoxLayoutProvider>
    <Container>
    <div className='sidecheckbox--containerrr'>
      
 <SidecheckBoxBar/>
  {children}
  </div>
  </Container>
  </SidebarCheckBoxLayoutProvider>
   
  
  
   </>
  )
}

export default SideCheckbLayout