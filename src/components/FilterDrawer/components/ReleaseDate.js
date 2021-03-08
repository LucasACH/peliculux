import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import MobileDateRangePicker from "@material-ui/lab/MobileDateRangePicker";

import "../styles/ReleaseDate.css";

function ReleaseDate() {
  const [releaseDate, setReleaseDate] = useState([null, null]);

  return (
    <div className="release-date">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateRangePicker
          startText="From"
          endText="To"
          value={releaseDate}
          onChange={(newValue) => {
            setReleaseDate(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} variant="standard" />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} variant="standard" />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

export default ReleaseDate;
