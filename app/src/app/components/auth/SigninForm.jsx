import { Button  } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UserAuthInputs from '../user/form/UserAuthInputs';

const SigninForm = () => {
  return (
    <Box
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        gap: 2
      }}
    >
      <UserAuthInputs />
      <Button 
        variant="contained"
        type="submit"
      >
        Signin
      </Button>
    </Box>
  );
};

export default SigninForm;