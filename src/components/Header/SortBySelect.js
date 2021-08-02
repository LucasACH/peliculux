import { useContext } from "react";

import { PopularMoviesContext } from "../../context/popularMovies";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function SortBySelect() {
  const popularMovies = useContext(PopularMoviesContext);

  function handleSortByChange(event) {
    popularMovies.setPage(1);
    popularMovies.setMovies([]);
    popularMovies.setSortBy(event.target.value);
  }

  return (
    <FormControl>
      <Select
        value={popularMovies.sortBy}
        onChange={handleSortByChange}
        variant="filled"
        disableUnderline
      >
        <MenuItem value="popularity.desc">Popularity Descending</MenuItem>
        <MenuItem value="popularity.asc">Popularity Ascending</MenuItem>
        <MenuItem value="vote_average.desc">Rating Descending</MenuItem>
        <MenuItem value="vote_average.asc">Rating Ascending</MenuItem>
        <MenuItem value="release_date.desc">Release Date Descending</MenuItem>
        <MenuItem value="release_date.asc">Release Date Ascending</MenuItem>
        <MenuItem value="original_title.desc">Title (A-Z)</MenuItem>
        <MenuItem value="original_title.asc">Title (Z-A)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortBySelect;
