import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [filterDrawerState, setFilterDrawerState] = useState(false);
  return (
    <StateContext.Provider value={{ filterDrawerState, setFilterDrawerState }}>
      {children}
    </StateContext.Provider>
  );
};
