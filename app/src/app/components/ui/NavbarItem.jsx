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
        p: 1,
        borderRadius: 1,
        textTransform: 'uppercase',
        transition: 'all 0.3s ease-in-out',
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