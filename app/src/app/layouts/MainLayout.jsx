import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import FooterMain from '../components/ui/FooterMain';
import NavbarMain from '../components/ui/NavbarMain';

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavbarMain />

      <Container
        component={'main'}
        sx={{
          pl: "0!important",
          pr: "0!important",
          width: "100%",
          maxWidth: "100%!important",
        }}
      >
        {children}
      </Container>

      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 99999,
          aspectRatio: "1",
          transform: "scale(.6)",
        }}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <img src="../icons/upArrow.svg" alt="" className='toTop' />
      </Button>

      <FooterMain />
    </Box>
  );
};

export default MainLayout;