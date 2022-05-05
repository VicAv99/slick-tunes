import { Box, IconButton, styled, Typography } from '@mui/material';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { NextImage } from '@/components/NextImage';

const Image = styled(NextImage)({
  margin: 15,
});

export const PlayerData = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Image
        priority
        useSkeleton
        src='https://picsum.photos/200/300'
        alt='random image'
        width={50}
        height={50}
      />
      <Box sx={{ margin: 'auto 30px auto 0' }}>
        <Typography sx={{ lineHeight: 1 }} variant='subtitle1'>
          Song Title
        </Typography>
        <Typography sx={{ lineHeight: 1, color: 'gray' }} variant='subtitle2'>
          Song Artist
        </Typography>
      </Box>
      <IconButton>
        <FaHeart size={20} />
      </IconButton>
    </Box>
  );
};
