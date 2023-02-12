import React, { useState } from 'react';
import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';
import ShopService from '../../../setup/services/shop.service';

const ShopFormCreate = ({ handleClose, fetchAllShops }) => {
  const [shop, setShop] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setShop({
        ...shop,
        [name]: value
    })
  }
  const createShop = async () => {
    try {
      await ShopService.create(shop);
      handleClose()
      fetchAllShops();
    } catch (error) {
      console.log("error : ", error.message);
    }
  }
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
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Create a new shop
      </Typography>
      <FormGroup>

        <TextField  
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          required
          onChange={(e)=>handleChange(e)}
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
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Password"
          variant="outlined"
          type="text"
          name="password"
          required
          onChange={(e)=>handleChange(e)}
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
        />
      </FormGroup>

      <Button
        variant="contained"
        onClick={() => {
          createShop()
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
          Create
        </Typography>
      </Button>
    </Box>
  );
};

export default ShopFormCreate;