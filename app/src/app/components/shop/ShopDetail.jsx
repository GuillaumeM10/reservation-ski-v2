import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopService from '../../../setup/services/shop.service';
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

  return (
    <>
      {shop && (
        <>
          <div className='shopDetails'>
            <a href="/">Back</a>
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
              <>
                <PostCreate fetchPost={fetchPost} shop={shop._id} />
              </>
            )}
            <ul className='mainList'>
              {shop.posts.map((product) => (
                <li key={product._id}>
                  <PostCardMain post={product} loggedIn={loggedIn} fetchPost={fetchPost} />
                </li>
              ))}
            </ul>

          </div>

          <ShopFormLogin handleLogin={handleLogin} open={open} setOpen={setOpen} />
        </>
      )}
    </>
  );
};

export default ShopDetail;