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

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
    // input `2020-10-07`(YYYY-MM-DD)
    // output `Wednesday, October 7`
    const date = new Date(input); // NOTE: input date is treated as utc
    return `${dayNames[date.getUTCDay()]}, ${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}`;
  }

  parseTime(input) {
    // input `14:00`
    // output `2pm`
    const hour = parseInt(input.split(':')[0], 0);
    const minute = input.split(':')[1].slice(-3);
    const isHourPm = hour >= 12;
    const timeName = isHourPm ? 'pm' : 'am';
    const parts = [];
    if (hour === 0 || hour === 12) {
      parts.push('12');
    } else {
      parts.push(isHourPm ? hour - 12 : hour);
    }
    if (minute === '30') {
      parts.push(`:${minute}`); // let's only support 30 minute increments
    }
    parts.push(timeName);
    return parts.join('');
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
