import { Slider, Stack } from '@mui/material';
import React from 'react';
import { FaVolumeUp } from 'react-icons/fa';

export const PlayerActions = () => {
  return (
    <Stack
      sx={{ marginLeft: 'auto', marginRight: '10px' }}
      width='70%'
      height='100%'
      spacing={2}
      direction='row'
      alignItems='center'
    >
      <FaVolumeUp size={25} />
      <Slider size='small' />
    </Stack>
  );
};
