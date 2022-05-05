import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import React from 'react';
import { FaHeartbeat, FaHome, FaPlusSquare, FaSearch } from 'react-icons/fa';

interface SidenavProps {
  drawerWidth: number;
}

const routeLinks = [
  {
    path: '/',
    label: 'Home',
    icon: FaHome,
  },
  {
    path: '/search',
    label: 'Search',
    icon: FaSearch,
  },
  {},
  {
    path: '/playlist/new',
    label: 'Create Playlist',
    icon: FaPlusSquare,
  },
  {
    path: '/likes',
    label: 'Liked Songs',
    icon: FaHeartbeat,
  },
];

export const Sidenav = ({ drawerWidth }: SidenavProps) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar />
      <Divider />
      <List>
        {routeLinks.map((routeLink) => (
          <ListItem key={routeLink.path ?? 'empty-item'} button>
            {routeLink.icon && (
              <>
                <ListItemIcon>
                  <routeLink.icon size={25} />
                </ListItemIcon>
                <ListItemText primary={routeLink.label} />
              </>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Playlist 1', 'Playlist 2', 'Playlist 3'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
