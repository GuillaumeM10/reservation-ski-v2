import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ shop }) => {
  return (
    <>
      <div className='cardMain'>
        <img src={shop.logo ? shop.logo : "aaa"} alt="" />

        <div>
          <Typography variant="h5" component="h2">
            {shop.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shop.description}
          </Typography>
        </div>
      </div>
      <Button
        component={Link}
        to={`/shop/${shop._id}`}
        variant="contained"
      >
        <Typography>
          View
        </Typography>
      </Button>
    </>
  );
};

export default ShopCard;