import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api from '../utils/api';

const SignUp = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '', role: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post('/auth/signup', form);
      navigate('/signin');
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flex: 1, backgroundImage: 'url(https://source.unsplash.com/featured/?entrepreneurs)', backgroundSize: 'cover' }} />
      <Box sx={{ flex: 1, padding: 4 }}>
        <Typography variant="h4">Sign Up</Typography>
        <TextField label="Name" fullWidth margin="normal" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <TextField label="Role" fullWidth margin="normal" onChange={(e) => setForm({ ...form, role: e.target.value })} />
        <Button onClick={handleSubmit}>Create Account</Button>
        <Button variant="text" onClick={() => navigate('/signin')}>Already have an account? Sign In</Button>
      </Box>
    </Box>
  );
};

export default SignUp;