import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

const ProgressBar = ({ progress, label }) => (
  <Box sx={{ width: '100%' }}>
    <Typography>{label}</Typography>
    <LinearProgress variant="determinate" value={progress} />
  </Box>
);

export default ProgressBar;