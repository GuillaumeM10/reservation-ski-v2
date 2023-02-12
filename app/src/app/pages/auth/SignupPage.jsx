import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <Box>
      <Typography
        variant="h1"
      >
        Signup Page
      </Typography>

      <SignupForm />
    </Box>
  );
};

export default SignupPage;