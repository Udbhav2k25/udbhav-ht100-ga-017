import React, { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent } from '@mui/material';
import Button from '../components/Button';
import LoadingSkeleton from '../components/LoadingSkeleton';
import api from '../utils/api';

const AssetRefinement = () => {
  const [productImage, setProductImage] = useState(null);
  const [scene, setScene] = useState('');
  const [forbiddenTerms, setForbiddenTerms] = useState('');
  const [resizedImages, setResizedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInpaint = async () => {
    setLoading(true);
    const res = await api.post('/campaigns/inpaint', { productImage, scene });
    setResizedImages(res.data.images);
    setLoading(false);
  };

  const handleResize = async () => {
    const res = await api.post('/campaigns/resize', { images: resizedImages });
    setResizedImages(res.data);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Asset Refinement</Typography>
      <img src="https://source.unsplash.com/featured/?product-placement" alt="Product Placement" style={{ width: '100%', height: 200 }} />
      <TextField label="Scene Description" fullWidth onChange={(e) => setScene(e.target.value)} />
      <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
      <Button onClick={handleInpaint}>Place Product</Button>
      {loading && <LoadingSkeleton />}
      <TextField label="Forbidden Terms" fullWidth onChange={(e) => setForbiddenTerms(e.target.value)} />
      <Button onClick={handleResize}>Resize for Channels</Button>
      {resizedImages.map((img, i) => <img key={i} src={img} alt={`Resized ${i}`} style={{ width: '30%' }} />)}
    </Box>
  );
};

export default AssetRefinement;