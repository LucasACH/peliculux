import { useContext } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FilterDrawerContext } from "../../../context/FilterDrawerContext";

function ReleaseDate() {
  const { from, setFrom, to, setTo } = useContext(FilterDrawerContext);

  const handleFromDateChange = (date) => {
    setFrom(date);
  };

  const handleToDateChange = (date) => {
    setTo(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="release-date">
        <KeyboardDatePicker
          autoOk
          fullWidth
          margin="normal"
          variant="inline"
          inputVariant="outlined"
          label="From"
          format="MM/dd/yyyy"
          value={from}
          maxDate={to}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleFromDateChange(date)}
        />

        <KeyboardDatePicker
          autoOk
          fullWidth
          margin="normal"
          variant="inline"
          inputVariant="outlined"
          label="To"
          format="MM/dd/yyyy"
          value={to}
          minDate={from}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleToDateChange(date)}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default ReleaseDate;
