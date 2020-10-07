import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {props.text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
