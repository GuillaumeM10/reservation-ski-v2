import { FormGroup, TextField } from '@mui/material';
import React from 'react';

const UserAuthInputs = () => {
  return (
    <>
      <FormGroup>
        <TextField  
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          required
        /> 
      </FormGroup>
      <FormGroup>
        <TextField  
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
        /> 
      </FormGroup>
    </>
  );
};

export default UserAuthInputs;