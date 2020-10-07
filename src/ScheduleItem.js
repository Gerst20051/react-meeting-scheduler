import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function ScheduleItem(props) {
  return (
    <ListItem>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}

export default ScheduleItem;
