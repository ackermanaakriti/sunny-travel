import React,{createContext, useContext} from 'react';

const LayoutContext = createContext();

export const LayoutProvider=({children})=>
{

return(
    <LayoutContext.Provider>
        {children}
    </LayoutContext.Provider>
)
}

export const useLayout =()=> useContext(LayoutContext);
