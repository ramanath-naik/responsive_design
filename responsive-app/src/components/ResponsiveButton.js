import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ResponsiveButton = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={5}>
        <Button fullWidth variant="contained" color="primary">
          Button1
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Button fullWidth variant="contained" color="primary">
          Button2
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResponsiveButton;
