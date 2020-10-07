import React from 'react';
import { Box, Button, Divider, Paper, Typography } from '@material-ui/core';
import DateAndTimeRangeSelector from './DateAndTimeRangeSelector';
import Header from './Header';
import Schedule from './Schedule';

class Scheduler extends React.Component {
  state = {
    currentDateAndTimeRange: null,
    schedule: [],
  };

  formRangeString(currentDateAndTimeRange) {
    return `${currentDateAndTimeRange.date} from ${currentDateAndTimeRange.timeStart} to ${currentDateAndTimeRange.timeEnd}`;
  }

  addTimeRangeToSchedule() {
    if (!this.state.currentDateAndTimeRange) return;
    const currentRangeText = this.formRangeString(this.state.currentDateAndTimeRange.selectedValues);
    if (this.state.schedule.find(item => {
      return item.text === currentRangeText;
    })) return;
    this.setState((prevState) => ({
      schedule: prevState.schedule.concat([{
        id: Math.random(),
        text: currentRangeText,
      }]),
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Header text="Meeting Scheduler" />
        <Paper variant="outlined" square>
          <Box align="center">
            <br />
            <DateAndTimeRangeSelector onChange={(data) => {
              this.setState({ currentDateAndTimeRange: data });
            }} />
            <Button variant="contained" color="primary" onClick={() => {
              this.addTimeRangeToSchedule();
            }}>Add Time Range To Schedule</Button>
            <br />
            <br />
            <Divider />
            {this.state.schedule.length
              ? <Schedule ranges={this.state.schedule} />
              : <Box><br /><Typography>No Time Ranges Added</Typography><br /></Box>}
          </Box>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Scheduler;
