import { Box } from '@mui/system';
import React from 'react';
import NavbarItem from './NavbarItem';

const ConfigNavbarItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/shops',
    label: 'Shops',
  }
];


const NavbarMain = () => {
  return (
    <Box
      component={'nav'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0.5,
        backgroundColor: 'primary.main50',
        color: 'white',
        gap: 10,
        backdropFilter: 'saturate(180%) blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 99999,
      }}
    >
      {ConfigNavbarItems.map((item, index) => (
        <NavbarItem
          key={index}
          path={item.path}
          label={item.label}
        />
      ))}
    </Box>
  );
};

export default NavbarMain;