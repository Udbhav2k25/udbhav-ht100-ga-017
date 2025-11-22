import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const Research = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState({});

  const handleResearch = async () => {
    const res = await api.post('/research', { url });
    setResults(res.data);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Research Brand</Typography>
      <img src="https://source.unsplash.com/featured/?research" alt="Research" style={{ width: '100%', height: 200 }} />
      <TextField label="URL" fullWidth onChange={(e) => setUrl(e.target.value)} />
      <Button onClick={handleResearch}>Research</Button>
      <Typography>{JSON.stringify(results)}</Typography>
    </Box>
  );
};

export default Research;