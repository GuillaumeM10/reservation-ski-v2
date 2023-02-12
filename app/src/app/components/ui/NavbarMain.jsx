import { Box } from '@mui/system';
import React from 'react';
import NavbarItem from './NavbarItem';

const ConfigNavbarItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/auth/signin',
    label: 'SignIn',
  },
  {
    path: '/auth/signup',
    label: 'SignUp',
  },
];


const NavbarMain = () => {
  return (
    <Box
      component={'nav'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        backgroundColor: 'primary.main',
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