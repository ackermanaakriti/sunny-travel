import React, { createContext, useContext } from "react";

const DetailsPageSideBar = createContext();
export const DetailsPageSideBarLayoutProvider = ({ children }) => {
  return (
    <>
      <DetailsPageSideBar.Provider>{children}</DetailsPageSideBar.Provider>
    </>
  );
};

export const DetailsPageSideBarLayout = () => useContext(DetailsPageSideBar);
