import React from 'react';
import { Skeleton, Box } from '@mui/material';

const LoadingSkeleton = () => (
  <Box sx={{ width: '100%', height: 200 }}>
    <Skeleton variant="rectangular" width="100%" height="100%" />
  </Box>
);

export default LoadingSkeleton;