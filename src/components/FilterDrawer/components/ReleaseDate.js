import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import MobileDateRangePicker from "@material-ui/lab/MobileDateRangePicker";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "../styles/ReleaseDate.css";

const theme = createMuiTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#1c2028",
          color: "#ffffff",
          borderRadius: "10px",
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    primary: {
      main: "#0ce8ce",
    },
  },
});

function ReleaseDate() {
  const [releaseDate, setReleaseDate] = useState([null, null]);

  return (
    <div className="release-date">
      <ThemeProvider theme={theme}>
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
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default ReleaseDate;
