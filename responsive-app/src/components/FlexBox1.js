import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper } from '@mui/material';

export default function FlexBox1() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: 'row',
          p: 2,
          borderRadius: 1,
          gap:2,
          bgcolor: 'yellow',
          
        }}
      >
        <Paper style={{backgroundColor:'lightgreen', flex: '1 0 700px'}}>Typography 1</Paper>
        <Paper sx={{backgroundColor: 'lightblue',flex: '1 1 700px' }}>Typography 2</Paper>
        <Paper sx={{bgcolor: 'lightsalmon', flex: '1 0 700px' }}>Typography 3</Paper>
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
        <Paper>Typo</Paper>
        <Paper>Typo</Paper>
        <Paper>Typo</Paper>
      </Box>
    </div>
  )
}
