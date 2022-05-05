import { Box, IconButton, Slider } from '@mui/material';
import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPlayCircle,
  FaRandom,
  FaRedo,
} from 'react-icons/fa';

export const PlayerControls = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton>
          <FaRandom size={20} />
        </IconButton>
        <IconButton>
          <FaAngleDoubleLeft size={20} />
        </IconButton>
        <IconButton>
          <FaPlayCircle size={30} />
        </IconButton>
        <IconButton>
          <FaAngleDoubleRight size={20} />
        </IconButton>
        <IconButton>
          <FaRedo size={20} />
        </IconButton>
      </Box>
      <Slider color='secondary' />
    </Box>
  );
};
