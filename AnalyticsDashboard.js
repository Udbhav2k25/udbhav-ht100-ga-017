import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const AnalyticsDashboard = () => {
  const [data, setData] = useState({ oneShotRate: 0, hallucinationRate: 0 });

  useEffect(() => {
    api.get('/analytics').then(res => setData(res.data));
  }, []);

  const handleExport = () => {
    // TODO: Export PDF
    alert('Report Exported!');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Analytics Dashboard</Typography>
      <img src="https://source.unsplash.com/featured/?charts" alt="Analytics Charts" style={{ width: '100%', height: 200 }} />
      <Card><CardContent><Typography>One-Shot Rate: {data.oneShotRate}%</Typography></CardContent></Card>
      <Card><CardContent><Typography>Hallucination Rate: {data.hallucinationRate}%</Typography></CardContent></Card>
      <Button onClick={handleExport}>View Reports</Button>
    </Box>
  );
};

export default AnalyticsDashboard;