import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FooterMain = ({ title }) => {
  return (
    <Box
      component={'footer'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        p: 1.5,
        mt: 5,
        backgroundColor: 'primary.main50',
        color: 'white',
        gap: 10,
        zIndex: 999,
      }}
    >
      <Typography
        variant='h5'
        component='h5'
        sx={{
          color: 'white',
          zIndex: 1,
        }}
      >
        Ski Reservation
      </Typography>
      
      <Typography
        variant='p'
        component='p'
        sx={{
          color: 'white',
          zIndex: 1,
        }}
      >
        © 2023 by Ski Reservation. GuillaumeM
      </Typography>

      
    </Box>
  );
};

export default FooterMain;