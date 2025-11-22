import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api from '../utils/api';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await api.post('/auth/signin', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flex: 1, backgroundImage: 'url(https://source.unsplash.com/featured/?marketing)', backgroundSize: 'cover' }} />
      <Box sx={{ flex: 1, padding: 4 }}>
        <Typography variant="h4">Sign In</Typography>
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button onClick={handleSubmit}>Sign In</Button>
      </Box>
    </Box>
  );
};

export default SignIn;