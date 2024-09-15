import React from 'react';
import { useNavigate } from 'react-router-dom';
import lancetechlOGO from '../../assets/lancetech.svg';
import { Box } from '@mui/material';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('')}>
      <img src={lancetechlOGO} alt="lancetechLOGO" />
    </Box>
  );
};

export default Logo;
