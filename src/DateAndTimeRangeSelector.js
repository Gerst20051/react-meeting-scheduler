import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    height: 70,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180,
  },
});

class DateAndTimeRangeSelector extends React.Component {
  state = {
    selectedValues: {
      date: null,
      timeEnd: null,
      timeStart: null,
      timezone: 'PST',
    },
    timeStep: 1800, // 30 minute increments
  };

  isFormComplete(state) {
    return !!(
      state.selectedValues.date &&
      state.selectedValues.timeEnd &&
      state.selectedValues.timeStart
    );
  }

  parseDate(input) {
    // 2020-10-07 (YYYY-MM-DD)
    return `Monday, March 20, 2020`;
  }

  parseTime(input) {
    return `02:00 PM ${this.state.selectedValues.timezone}`;
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            const date = event.target.value;
            this.setState((prevState) => {
              const newState = {
                ...prevState,
                selectedValues: {
                  ...prevState.selectedValues,
                  date: this.parseDate(date),
                },
              };
              this.props.onChange(this.isFormComplete(newState) ? newState : null);
              return newState;
            });
          }}
        />
        <TextField
          id="time_start"
          label="Start Time"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: this.state.timeStep,
          }}
          onChange={(event) => {
            const time = event.target.value;
            this.setState((prevState) => {
              const newState = {
                ...prevState,
                selectedValues: {
                  ...prevState.selectedValues,
                  timeStart: this.parseTime(time),
                },
              };
              this.props.onChange(this.isFormComplete(newState) ? newState : null);
              return newState;
            });
          }}
        />
        <TextField
          id="time_end"
          label="End Time"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: this.state.timeStep,
          }}
          onChange={(event) => {
            const time = event.target.value;
            this.setState((prevState) => {
              const newState = {
                ...prevState,
                selectedValues: {
                  ...prevState.selectedValues,
                  timeEnd: this.parseTime(time),
                },
              };
              this.props.onChange(this.isFormComplete(newState) ? newState : null);
              return newState;
            });
          }}
        />
      </form>
    );
  }
}

export default withStyles(useStyles)(DateAndTimeRangeSelector);
