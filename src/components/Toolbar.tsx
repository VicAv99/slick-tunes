import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  styled,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { stringAvatar } from '@/lib/utils';

interface ToolbarProps {
  drawerWidth: number;
}

const LocationNavButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 7,
  marginRight: 7,
  backgroundColor: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
  },
}));

export const Toolbar = ({ drawerWidth }: ToolbarProps) => {
  return (
    <AppBar
      position='fixed'
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <MuiToolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <LocationNavButton size='small' color='primary'>
            <FaChevronLeft />
          </LocationNavButton>
          <LocationNavButton size='small' color='primary'>
            <FaChevronRight />
          </LocationNavButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography marginRight={2} variant='h6' noWrap component='div'>
            SlickTunes
          </Typography>
          <Avatar {...stringAvatar('Kent Dodds')} />
        </Box>
      </MuiToolbar>
    </AppBar>
  );
};
