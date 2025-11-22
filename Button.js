import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, variant = 'contained', color = 'primary', ...props }) => (
  <MuiButton variant={variant} color={color} onClick={onClick} sx={{ borderRadius: 2, padding: '10px 20px' }} {...props}>
    {children}
  </MuiButton>
);

export default Button;