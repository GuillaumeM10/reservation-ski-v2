import React from 'react';
import { Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 8,
};

const ShopFormLogin = ({ handleLogin, open, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 'fit-content',
            minWidth: '0',
          }}
        >
          <img src="/icons/close.svg" alt="" /> 
        </Button>
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Admin Login
        </Typography>

        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
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
            <FormGroup>
              <TextField  
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
              /> 
            </FormGroup>
            
            <Button 
              variant="contained"
              type="submit"
              onClick={handleLogin}
            >
              Signin
            </Button>
          </Box>
        {/* </Typography> */}
      </Box>
    </ Modal>
  );
};

export default ShopFormLogin;