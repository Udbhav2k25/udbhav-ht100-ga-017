import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const PerformancePrediction = () => {
  const [prediction, setPrediction] = useState('');

  const handlePredict = async () => {
    const res = await api.post('/prediction/predict', {});
    setPrediction(res.data.prediction);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Performance Prediction</Typography>
      <img src="https://source.unsplash.com/featured/?prediction" alt="Prediction" style={{ width: '100%', height: 200 }} />
      <Button onClick={handlePredict}>Predict</Button>
      <Typography>{prediction}</Typography>
    </Box>
  );
};

export default PerformancePrediction;