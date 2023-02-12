import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ path, label }) => {
  return (
    <Typography
      variant="p"
      component={Link}
      to={path}
      sx={{
        color: 'white',
        textDecoration: 'none',
        p: 2,
        borderRadius: 1,
        '&:hover': {
          backgroundColor: 'primary.dark',
        }
      }}
    >
      {label}
    </Typography>
  );
};

export default NavbarItem;