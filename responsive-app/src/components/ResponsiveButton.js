import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const ResponsiveButton = () => {
  return (
    <Grid container spacing={3} columns={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Box  bgcolor="primary.light" p={2}>
          <Typography variant="body1" fontWeight={{ xs: 'normal', sm: 'bold', md: 'bold' }}>
            This is the First Grid
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            This is the Second Grid
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            This is the Third Grid
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            This is the Fourth Grid
          </Box>
        </Grid>
      </Grid>
  );
};

export default ResponsiveButton;
