import { AppBar, Box } from '@mui/material';
import React from 'react';

import { PlayerActions } from './PlayerActions';
import { PlayerControls } from './PlayerControls';
import { PlayerData } from './PlayerData';

export const Player = () => {
  return (
    <AppBar
      elevation={10}
      position='fixed'
      color='primary'
      sx={{ top: 'auto', bottom: 0, zIndex: 99999 }}
    >
      <Box
        sx={{ zIndex: 999999, paddingTop: '10px' }}
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={2}
      >
        <Box gridColumn='span 3'>
          <PlayerData />
        </Box>
        <Box gridColumn='span 6'>
          <PlayerControls />
        </Box>
        <Box gridColumn='span 3'>
          <PlayerActions />
        </Box>
      </Box>
    </AppBar>
  );
};
