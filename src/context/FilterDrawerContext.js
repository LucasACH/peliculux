import { createContext, useState } from "react";

export const FilterDrawerContext = createContext();

export const FilterDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([1, 10]);
  const [runtime, setRuntime] = useState([1, 360]);
  const [from, setFrom] = useState(new Date("2000-10-15T10:00:00"));
  const [to, setTo] = useState(new Date());

  return (
    <FilterDrawerContext.Provider
      value={{
        open,
        setOpen,
        sortBy,
        setSortBy,
        genres,
        setGenres,
        rating,
        setRating,
        runtime,
        setRuntime,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </FilterDrawerContext.Provider>
  );
};
