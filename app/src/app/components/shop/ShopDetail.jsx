import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../setup/services/post.service';
import ShopService from '../../../setup/services/shop.service';
import BookingList from '../booking/BookingList';
import PostCardMain from '../post/PostCardMain';
import PostCreate from '../post/PostCreate';
import ShopEditForm from './ShopEditForm';

const ShopDetail = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);
  
  useEffect(() => {
    if(shop && shop.user == localStorage.getItem('userId')) {
      setLoggedIn(true);
    }
  }, [shop]);

  const fetchPost = async () => {
    try {
        const response = await ShopService.getOne(id);
        setShop(response);
    } catch (error) {
        console.log(error);
    } 
  }

  const deleteShop = async () => {
    try {
      shop.posts.forEach(post => {
        PostService.remove(post._id);
      });
      localStorage.removeItem('shopId');
      await ShopService.remove(shop._id);
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {shop && (
        <>
          <div className='shopDetails'>
            <Button 
              href="/"
              variant="text"
              sx={{ 
                mt: 5,
                color: 'black',
              }}
              className="backButton"
            >
              Back
            </Button>
            <h1>{shop.name}</h1>
            <img className="shopLogo" src={shop.logo} alt="" />

            <div className="detailHeader">
              <h2>Posts</h2>
            </div>
            {loggedIn && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2,
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <ShopEditForm shop={shop} fetchPost={fetchPost} />
                <PostCreate fetchPost={fetchPost} shop={shop._id} />
                
                <BookingList bookings={shop.bookings} />
                
                <Button 
                  onClick={deleteShop}
                  variant="contained"
                  color="error"
                >
                  <Typography>
                    Delete Shop
                  </Typography>
                </Button>
              </Box>
            )}
            <ul className='mainList'>
              {shop.posts[0] ? shop.posts.map((product) => (
                <li key={product._id}>
                  <PostCardMain post={product} loggedIn={loggedIn} fetchPost={fetchPost} />
                </li>
              )):
              <li>
                <Typography>
                  No posts yet, please login as admin to create one.
                </Typography>
              </li>
              }
            </ul>

          </div>
        </>
      )}
    </>
  );
};

export default ShopDetail;