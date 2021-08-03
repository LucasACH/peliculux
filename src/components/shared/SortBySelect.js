import { useContext } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MoviesContext } from "../../context/MoviesContext";

function SortBySelect() {
  const moviesContext = useContext(MoviesContext);

  function handleSortByChange(event) {
    moviesContext.setSortBy(event.target.value);
    moviesContext.setPage(1);
  }

  return (
    <FormControl>
      <Select
        value={moviesContext.sortBy}
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
