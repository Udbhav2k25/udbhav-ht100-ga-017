import React, { useState } from 'react';
import { Box, Typography, TextField, Switch } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const Settings = () => {
  const [settings, setSettings] = useState({ forbiddenTerms: '', theme: 'light' });

  const handleSave = async () => {
    await api.post('/settings/update', settings);
    alert('Saved!');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Settings</Typography>
      <img src="https://source.unsplash.com/featured/?settings" alt="Settings" style={{ width: '100%', height: 200 }} />
      <TextField label="Forbidden Terms" fullWidth onChange={(e) => setSettings({ ...settings, forbiddenTerms: e.target.value })} />
      <Switch checked={settings.theme === 'dark'} onChange={() => setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' })} />
      <Button onClick={handleSave}>Save Changes</Button>
    </Box>
  );
};

export default Settings;