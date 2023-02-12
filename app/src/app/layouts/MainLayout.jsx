import { Box, Container } from '@mui/system';
import React from 'react';
import NavbarMain from '../components/ui/NavbarMain';

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavbarMain />

      <Container
        maxWidth="lg"
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;