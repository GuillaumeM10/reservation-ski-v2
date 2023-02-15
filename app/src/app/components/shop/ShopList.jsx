import { Box } from '@mui/system';
import React from 'react';
import ShopCard from './ShopCard';

const ShopList = ({ shops }) => {

  return (
    <Box>
      <ul className='mainList'>
        {shops.map((shop) => (
          <li key={shop._id}>
            <ShopCard shop={shop} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ShopList;