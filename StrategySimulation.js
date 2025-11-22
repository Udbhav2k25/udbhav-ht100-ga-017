import React, { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const StrategySimulation = () => {
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [simulation, setSimulation] = useState('');
  const [counterAd, setCounterAd] = useState('');

  const handleSimulate = async () => {
    const res = await api.post('/campaigns/simulate', {});
    setSimulation(res.data.log);
  };

  const handleCounter = async () => {
    const res = await api.post('/campaigns/counter', { url: competitorUrl });
    setCounterAd(res.data.ad);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Strategy Simulation</Typography>
      <img src="https://source.unsplash.com/featured/?strategy-chat" alt="Strategy Chat" style={{ width: '100%', height: 200 }} />
      <Button onClick={handleSimulate}>Simulate Feedback</Button>
      <Typography>{simulation}</Typography>
      <TextField label="Competitor URL" fullWidth onChange={(e) => setCompetitorUrl(e.target.value)} />
      <Button onClick={handleCounter}>Analyze & Counter</Button>
      <Typography>{counterAd}</Typography>
    </Box>
  );
};

export default StrategySimulation;