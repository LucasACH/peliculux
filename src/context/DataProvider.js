import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [filterDrawerState, setFilterDrawerState] = useState(false);
  return (
    <DataContext.Provider value={{ filterDrawerState, setFilterDrawerState }}>
      {children}
    </DataContext.Provider>
  );
};
