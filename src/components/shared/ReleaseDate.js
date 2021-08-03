import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import formatReleaseDate from "../../helpers/formatReleaseDate";

function ReleaseDate() {
  const moviesContext = useContext(MoviesContext);

  const handleFromDateChange = (date) => {
    moviesContext.setFrom(formatReleaseDate(date));
    moviesContext.setPage(1);
  };

  const handleToDateChange = (date) => {
    moviesContext.setTo(formatReleaseDate(date));
    moviesContext.setPage(1);
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
          value={moviesContext.from}
          maxDate={moviesContext.to}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleFromDateChange(date)}
        />

        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="To"
          format="MM/dd/yyyy"
          value={moviesContext.to}
          minDate={moviesContext.from}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleToDateChange(date)}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default ReleaseDate;
