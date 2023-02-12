
import { Button, FormGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UserAuthInputs from '../user/form/UserAuthInputs';

const SignupForm = () => {
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

    <FormGroup>
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        name="confirmPassword"
        required
      />
    </FormGroup>

    <Button 
      variant="contained"
      type="submit"
    >
      Signin
    </Button>
  </Box>
  );
};

export default SignupForm;