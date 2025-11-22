import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Button from '../components/Button';
import api from '../utils/api';

const CampaignTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    api.get('/templates').then(res => setTemplates(res.data));
  }, []);

  const handleUseTemplate = (template) => {
    // TODO: Load into CampaignCreation
    alert('Template loaded!');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Campaign Templates</Typography>
      <img src="https://source.unsplash.com/featured/?templates" alt="Templates" style={{ width: '100%', height: 200 }} />
      {templates.map(t => (
        <Card key={t.id}>
          <CardContent>
            <Typography>{t.name}</Typography>
            <Button onClick={() => handleUseTemplate(t)}>Use Template</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CampaignTemplates;