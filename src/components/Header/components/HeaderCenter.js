import PropTypes from "prop-types";

import { InputAdornment, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

function HeaderCenter({ onKeyDown }) {
  return (
    <div className="center">
      <TextField
        onKeyDown={onKeyDown}
        placeholder="Search movies"
        variant="filled"
        fullWidth
        size="small"
        inputMode="text"
        margin="none"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

HeaderCenter.propTypes = {
  onKeyDown: PropTypes.func,
};

export default HeaderCenter;
