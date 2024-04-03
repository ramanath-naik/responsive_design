import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Paper from "@mui/material/Paper";


const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "red"
  }
};

function NestedGrid() {
  return (
    <>
      <Grid item xs={4}>
        <Paper style={classes.paper}>First Item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={classes.paper}>Second Item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={classes.paper}>Third Item</Paper>
      </Grid>
    </>
  );
}

const ResponsiveButton = () => {
  return (
    <div style={classes.root}>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        {/*Render the InnerGrid as a child item */}
        <NestedGrid />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <NestedGrid />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <NestedGrid />
      </Grid>
    </Grid>
  </div>
  );
};

export default ResponsiveButton;
