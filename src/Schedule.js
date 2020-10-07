import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ScheduleItem from './ScheduleItem';

const useStyles = makeStyles((theme) => ({
  list: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Schedule(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {props.ranges.map(range => (
        <React.Fragment key={range.id}>
          <ScheduleItem text={range.text} />
        </React.Fragment>
      ))}
    </List>
  );
}
