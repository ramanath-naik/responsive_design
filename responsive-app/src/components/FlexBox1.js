import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper } from '@mui/material';

export default function FlexBox1() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          p: 1,
          borderRadius: 1,
          gap:2,
          bgcolor: 'yellow',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Paper style={{backgroundColor:'lightgreen'}}>Typography 1</Paper>
        <Paper sx={{backgroundColor: 'lightblue'}}>Typography 2</Paper>
        <Paper sx={{bgcolor: 'lightsalmon'}}>Typography 3</Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          gap: 2,
        }}
      >
        <Paper>Typography 1</Paper>
        <Paper>Typography 2</Paper>
        <Paper>Typography 3</Paper>
      </Box>
    </div>
  )
}
