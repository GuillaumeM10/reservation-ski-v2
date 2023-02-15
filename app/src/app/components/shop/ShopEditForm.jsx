import { Box, Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ShopService from '../../../setup/services/shop.service';

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

const ShopEditForm = ({ shop, fetchPost }) => {
  const [newShop, setNewShop] = useState(shop);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewShop({
        ...newShop,
        [name]: value
    })
  }

  const editShop = async () => {
    try {
      await ShopService.update(shop._id, newShop);
      handleClose()
      fetchPost();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        variant='contained'
        sx={{
          zIndex: 1,
        }}
        onClick={handleOpen}
      >
        Edit Shop
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
              Edit the shop
            </Typography>
            <FormGroup>

              <TextField  
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                required
                onChange={(e)=>handleChange(e)}
                defaultValue={shop.name}
              /> 
            </FormGroup>
            <FormGroup>
              <TextField
                label="Address"
                variant="outlined"
                type="text"
                name="address"
                required
                onChange={(e)=>handleChange(e)}
                defaultValue={shop.address}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
                onChange={(e)=>handleChange(e)}
                defaultValue={shop.password}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Logo"
                variant="outlined"
                type="text"
                name="logo"
                required
                onChange={(e)=>handleChange(e)}
                defaultValue={shop.logo}
              />
            </FormGroup>

            <Button
              variant="contained"
              onClick={() => {
                editShop()
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
                Edit
              </Typography>
            </Button>
          </Box>

        </Box>
      </Modal>
    </Box>
  );
};

export default ShopEditForm;