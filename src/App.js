import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
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
            step: 1800, // 30 minute increments
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
            step: 1800, // 30 minute increments
          }}
        />
      </form>
      <Button color="primary">Add Time Range To Schedule</Button>
    </div>
  );
}

export default App;
