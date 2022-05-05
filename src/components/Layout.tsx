import { Box } from '@mui/material';
import * as React from 'react';

import { Player } from './Player/Player';
import { Sidenav } from './Sidenav';
import { Toolbar } from './Toolbar';

const drawerWidth = 240;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // Put Header or Footer Here
  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar drawerWidth={drawerWidth} />
      <Sidenav drawerWidth={drawerWidth} />
      {children}
      <Player />
    </Box>
  );
};
