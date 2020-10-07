import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function ScheduleItem(props) {
  return (
    <ListItem>
      <ListItemText primary={props.text} align="center" />
    </ListItem>
  );
}

export default ScheduleItem;
