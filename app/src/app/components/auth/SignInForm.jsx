import { Box, Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AuthService from '../../../setup/services/auth.service';

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

const SignInForm = () => {
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
        ...user,
        [name]: value
    })
  }



  const signIn = async () =>{
    try {
      await AuthService.signin(user);
      await AuthService.user(localStorage.getItem("email"));
      window.location.reload();
      handleClose();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Connexion
      </Button>
      

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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Connexion Form
            </Typography>
            <FormGroup>
              <TextField
                sx={{ width: 300 }}
                label="Email"
                variant="outlined"
                type="text"
                name="email"
                required
                onChange={(e)=>handleChange(e)}
              /> 
            </FormGroup>
            <FormGroup>
              <TextField
                sx={{ width: 300 }}
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
                onChange={(e)=>handleChange(e)}
              /> 
            </FormGroup>
            
            <Button
              variant="contained"
              onClick={() => {
                signIn()
                handleClose()
              }}
              sx={{
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                }
              }}
            >
              <Typography>
                Connexion
              </Typography>
            </Button>
            <Button
              variant="text"
              href='/forget-password'
              sx={{
                color: 'black',
              }}
            >
              <Typography>
                Forget password
              </Typography>
            </Button>
          </Box>

        </Box>
      </Modal>
    </>
  );
};

export default SignInForm;