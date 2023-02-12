import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShopService from '../../../setup/services/shop.service';
import ShopFormCreate from '../../components/shop/ShopFormCreate';
import ShopList from '../../components/shop/ShopList';
import PagesListLayout from '../../layouts/PagesListLayout';

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

const ShopsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  const [shops, setShops] = useState([]);


  useEffect(() => {
    fetchAllShops()
  }, []);

  const fetchAllShops = async () => {
    try{
      const response = await ShopService.getAll()
      setShops([...response]);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <Box>
      <PagesListLayout title="shops" image="images.squarespace-cdn.com/content/v1/5f10afb30c07863e6f4f6115/61cbe488-f224-4d20-9f1e-09d8428035d7/TheSkiShop-ThunderbowlArchitects-16_web.jpg?format=2500w">
        <Button
          variant='contained'
          sx={{
            zIndex: 1,
          }}
          onClick={handleOpen}
        >
          <Typography
            sx={{
              color: 'white',
              zIndex: 1,
            }}
          >
            Create a new shop
          </Typography>
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
            
            <ShopFormCreate handleClose={handleClose} fetchAllShops={fetchAllShops} />
          </Box>
        </Modal>
      </PagesListLayout>

      <ShopList shops={shops} />
    </Box>
  );
};

export default ShopsPage;