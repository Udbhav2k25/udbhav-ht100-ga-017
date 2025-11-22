import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const SocialMediaScheduling = () => {
  const [post, setPost] = useState({ content: '', date: '' });

  const handleSchedule = async () => {
    await api.post('/scheduling/schedule', post);
    alert('Scheduled!');
  };

  const handleConnect = async (platform) => {
    await api.post('/scheduling/connect', { platform });
    alert(`${platform} connected!`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Social Media Scheduling</Typography>
      <img src="https://source.unsplash.com/featured/?social-media" alt="Social Media" style={{ width: '100%', height: 200 }} />
      <Button onClick={() => handleConnect('Instagram')}>Connect Instagram</Button>
      <Button onClick={() => handleConnect('LinkedIn')}>Connect LinkedIn</Button>
      <TextField label="Post Content" fullWidth onChange={(e) => setPost({ ...post, content: e.target.value })} />
      <TextField label="Schedule Date" type="datetime-local" fullWidth onChange={(e) => setPost({ ...post, date: e.target.value })} />
      <Button onClick={handleSchedule}>Schedule Post</Button>
    </Box>
  );
};

export default SocialMediaScheduling;