import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AccessTokenService from '../../../setup/services/token.service';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import NavbarItem from './NavbarItem';

const ConfigNavbarItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/shops',
    label: 'Shops',
  }
];


const NavbarMain = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const help = async () => {
      setToken(await AccessTokenService.getAccessToken());
    }
    help();
  }, []);

  const logout = () => {
    AccessTokenService.removeAccessToken();
    setToken(false);
    window.location.reload();
  }
  
  return (
    <Box
      component={'nav'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0.5,
        backgroundColor: 'primary.main50',
        color: 'white',
        gap: 10,
        backdropFilter: 'saturate(180%) blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 99999,
      }}
    >
      {ConfigNavbarItems.map((item, index) => (
        <NavbarItem
          key={index}
          path={item.path}
          label={item.label}
        />
      ))}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          width: 'fit-content',
        }}
      >
      {token ?
        <>
          {localStorage.getItem('shopId') &&
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blue',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'blue',
                  color: 'white',
                }
              }}
              href={'/shop/'+ localStorage.getItem('shopId')}
            >
              My Shop
            </Button>
          }
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'green',
              color: 'white',
              '&:hover': {
                backgroundColor: 'green',
                color: 'white',
              }
            }}
            onClick={logout}
          >
            Logout
          </Button>
        </> 
      :
        <>
          <SignInForm />
          <SignUpForm />
        </>
      }
      </Box>
    </Box>
  );
};

export default NavbarMain;