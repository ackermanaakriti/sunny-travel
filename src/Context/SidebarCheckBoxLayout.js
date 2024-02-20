import React, { createContext, useContext } from 'react'
import SidecheckBoxBar from '../Components/SideCheckBox/SidecheckBoxBar';


const SidebCheckBoxLayoutContext = createContext();
 export const SidebarCheckBoxLayoutProvider = ({children}) => {
  return (
   <>
   <SidebCheckBoxLayoutContext.Provider>
  
   {children}
   </SidebCheckBoxLayoutContext.Provider>

   </>
  )
}


export const useSideCheckBoxLayout = ()=>useContext(SidebCheckBoxLayoutContext);
