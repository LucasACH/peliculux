import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [filterDrawerState, setFilterDrawerState] = useState(false);
  const [sortBy, setSortBy] = useState("popularity.desc");
  return (
    <DataContext.Provider
      value={{ filterDrawerState, setFilterDrawerState, sortBy, setSortBy }}
    >
      {children}
    </DataContext.Provider>
  );
};
