import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PostFilters = () => {


  return (
    <Box
      sx={{
        zIndex: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: '#fff',
        }}
      >
        PostFilters
      </Typography>
    </Box>
  );
};

export default PostFilters;