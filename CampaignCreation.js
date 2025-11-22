import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ProgressBar from '../components/ProgressBar';
import api from '../utils/api';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const CampaignCreation = () => {
  const [step, setStep] = useState(1); // 1: Input, 2: Research, 3: Strategy, 4: Creation
  const [form, setForm] = useState({ url: '', productImage: null });
  const [brandBible, setBrandBible] = useState({});
  const [angles, setAngles] = useState([]);
  const [selectedAngle, setSelectedAngle] = useState('');
  const [draft, setDraft] = useState({ copy: '', imageUrl: '' });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('progress', (data) => setProgress(data.progress));
    return () => socket.off('progress');
  }, []);

  const handleResearch = async () => {
    setLoading(true);
    try {
      const res = await api.post('/research', { url: form.url });
      setBrandBible(res.data);
      setStep(2);
    } catch (err) {
      alert('Research failed');
    }
    setLoading(false);
  };

  const handleStrategy = async () => {
    const res = await api.post('/campaigns/strategy', { brandBible });
    setAngles(res.data.angles);
    setStep(3);
  };

  const handleCreation = async () => {
    setLoading(true);
    const res = await api.post('/campaigns/create', { angle: selectedAngle, brandBible, productImage: form.productImage });
    setDraft(res.data);
    setStep(4);
    setLoading(false);
  };

  const handleRegenerate = async (tweaks) => {
    setLoading(true);
    const res = await api.post('/campaigns/regenerate', { draft, tweaks });
    setDraft(res.data);
    setLoading(false);
  };

  const handleExport = () => {
    // TODO: Implement export logic (e.g., download ZIP)
    alert('Exported!');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Campaign Creation</Typography>
      <img src="https://source.unsplash.com/featured/?creative-process" alt="Creative Process" style={{ width: '100%', height: 200 }} />
      {step === 1 && (
        <Box>
          <TextField label="Website URL" fullWidth onChange={(e) => setForm({ ...form, url: e.target.value })} />
          <input type="file" onChange={(e) => setForm({ ...form, productImage: e.target.files[0] })} />
          <Button onClick={handleResearch}>Analyze Brand</Button>
        </Box>
      )}
      {step === 2 && loading && <LoadingSkeleton />}
      {step === 2 && !loading && (
        <Box>
          <Typography>Brand Bible: {JSON.stringify(brandBible)}</Typography>
          <Button onClick={handleStrategy}>Proceed to Strategy</Button>
        </Box>
      )}
      {step === 3 && (
        <Box>
          <RadioGroup value={selectedAngle} onChange={(e) => setSelectedAngle(e.target.value)}>
            {angles.map((angle, i) => <FormControlLabel key={i} value={angle} control={<Radio />} label={angle} />)}
          </RadioGroup>
          <Button onClick={handleCreation}>Select & Generate</Button>
        </Box>
      )}
      {step === 4 && loading && <ProgressBar progress={progress} label="Generating..." />}
      {step === 4 && !loading && (
        <Card>
          <CardContent>
            <Typography>Copy: {draft.copy}</Typography>
            <img src={draft.imageUrl} alt="Draft" style={{ width: '100%' }} />
            <Button onClick={() => handleRegenerate('Make it more playful')}>Regenerate</Button>
            <Button onClick={handleExport}>Export</Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default CampaignCreation;