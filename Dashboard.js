import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api from '../utils/api';

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/campaigns').then(res => setCampaigns(res.data));
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      <img src="https://source.unsplash.com/featured/?dashboard" alt="Dashboard" style={{ width: '100%', height: 200 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Button onClick={() => navigate('/campaign-creation')}>Launch Campaign</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Button onClick={() => navigate('/analytics')}>View Analytics</Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more cards for other buttons */}
      </Grid>
      <Typography variant="h6">Past Campaigns</Typography>
      {campaigns.map(c => <div key={c.id}>{c.name}</div>)}
    </Box>
  );
};