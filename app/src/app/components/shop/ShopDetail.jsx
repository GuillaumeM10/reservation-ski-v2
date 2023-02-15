import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../setup/services/post.service';
import ShopService from '../../../setup/services/shop.service';
import BookingList from '../booking/BookingList';
import PostCardMain from '../post/PostCardMain';
import PostCreate from '../post/PostCreate';
import ShopFormLogin from './ShopFormLogin';

const ShopDetail = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    fetchPost();
  }, []);
  
  useEffect(() => {
    if(shop && localStorage.getItem(shop._id)) {
      setLoggedIn(true);
    }
  }, [shop]);

  useEffect(() => {
    if (loggedIn) {
      setOpen(false);
    }
  }, [loggedIn]);

  const fetchPost = async () => {
    try {
        const response = await ShopService.getOne(id);
        setShop(response);
    } catch (error) {
        console.log(error);
    } 
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.parentElement.querySelector('input').value;
    if (password === shop.password) {
      setLoggedIn(true);
      localStorage.setItem(shop._id, true);
    } else {
      alert('Wrong password');
    }
  }

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem(shop._id);
  }

  const deleteShop = async () => {
    try {
      shop.posts.forEach(post => {
        PostService.remove(post._id);
      });
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
            <img src={shop.imageUrl} alt="" />

            <div className="detailHeader">
              <h2>Posts</h2>
              {!loggedIn && (
                <Button onClick={handleOpen}>
                  <Typography>
                    Admin Login
                  </Typography>
                </Button>
              )}
              {loggedIn && (
                <Button onClick={logout}>
                  <Typography>
                    Logout
                  </Typography>
                </Button>
              )}
            </div>
            {loggedIn && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
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

          <ShopFormLogin handleLogin={handleLogin} open={open} setOpen={setOpen} />
        </>
      )}
    </>
  );
};

export default ShopDetail;