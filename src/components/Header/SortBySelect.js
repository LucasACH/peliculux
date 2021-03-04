import React, { useState } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function SortBySelect() {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl margin="normal">
      <Select
        disableUnderline={true}
        value={sortBy}
        onChange={handleSortByChange}
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
