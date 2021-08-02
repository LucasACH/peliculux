import { useContext, useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { PopularMoviesContext } from "../../../context/popularMovies";
import formatReleaseDate from "../../../helpers/formatReleaseDate";

function ReleaseDate() {
  const popularMovies = useContext(PopularMoviesContext);

  const handleFromDateChange = (date) => {
    popularMovies.setLoading(true);
    popularMovies.setMovies([]);
    popularMovies.setPage(1);
    popularMovies.setFrom(formatReleaseDate(date));
  };

  const handleToDateChange = (date) => {
    popularMovies.setLoading(true);
    popularMovies.setMovies([]);
    popularMovies.setPage(1);
    popularMovies.setTo(formatReleaseDate(date));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="release-date">
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="From"
          format="MM/dd/yyyy"
          value={popularMovies.from}
          maxDate={popularMovies.to}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleFromDateChange(date)}
        />

        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="To"
          format="MM/dd/yyyy"
          value={popularMovies.to}
          minDate={popularMovies.from}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleToDateChange(date)}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default ReleaseDate;
