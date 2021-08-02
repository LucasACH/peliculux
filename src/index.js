import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";

const theme = createTheme({
  palette: {
    common: {
      black: "#1C2028",
      white: "#F5F5F5",
    },
    type: "dark",
    primary: {
      light: "#2AF4DC",
      main: "#0CE8CE",
      dark: "#0AC2AC",
      contrastText: "#1C2028",
    },
    secondary: {
      light: "#3E4451",
      main: "#2C3039",
      dark: "#1B1D23",
      contrastText: "#F5F5F5",
    },
    grey: {
      50: "#6A748A",
      100: "#626A7F",
      200: "#596173",
      300: "#505768",
      400: "#474D5C",
      500: "#3E4451",
      600: "#353A45",
      700: "#2C3039",
      800: "#23272E",
      900: "#1B1D23",
    },
    background: {
      paper: "#23272E",
      default: "#2C3039",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#EBEBEB",
    },
  },
  shape: {
    borderRadius: "10px",
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        "&.PrivateNotchedOutline-root-3": {
          border: "none",
        },
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: "10px",
      },
      adornedStart: {
        padding: "0px",
        margin: "0px",
      },
      inputMarginDense: {
        paddingTop: "15px",
        paddingBottom: "12px",
      },
      underline: {
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
      input: {
        padding: "10px 15px",
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#23272E",
      },
    },
    MuiInputAdornment: {
      filled: {
        "&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)":
          {
            marginTop: "2px",
          },
      },
      root: {
        opacity: 0.5,
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
