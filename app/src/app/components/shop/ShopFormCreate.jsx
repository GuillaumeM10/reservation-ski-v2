import React, { useState } from 'react';
import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';
import ShopService from '../../../setup/services/shop.service';
import { useEffect } from 'react';
import AuthService from '../../../setup/services/auth.service';

const ShopFormCreate = ({ handleClose, fetchAllShops }) => {
  const [shop, setShop] = useState({});
  const [canCreatShop, setCanCreatShop] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setShop({
        "user": localStorage.getItem("userId"),
        ...shop,
        [name]: value
    })
  }

  useEffect(() => {
    const checkIfUserHasShop = async () => {
      try {
        const response = await AuthService.user(localStorage.getItem("email"));
        
        if(response.shop){
          setCanCreatShop(false);
        }else if(response.shop == null){
          setCanCreatShop(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    checkIfUserHasShop();
  }, [])





  const createShop = async () => {
    try {
      const newShop = await ShopService.create(shop);
      localStorage.setItem("shopId", newShop._id);
      handleClose()
      fetchAllShops();
      window.location.href = "/shop/" + newShop._id;
    } catch (error) {
      console.log(error.response.data.message);
      if(!error.response.data.message[0]){
        alert("Please fill all the fields")
      }else if(error.response.data.message == "You already have a shop"){
        setCanCreatShop(false);
      }
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
          label="Logo"
          variant="outlined"
          type="text"
          name="logo"
          required
          onChange={(e)=>handleChange(e)}
        />
      </FormGroup>

      {canCreatShop ? 
      

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
      : <Typography variant="h6" component="h2">You already have a shop</Typography>}

    </Box>
  );
};

export default ShopFormCreate;