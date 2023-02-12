import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const PagesListLayout = ({ children, title, image }) => {

  return (
    <Box
      component={'section'}
      sx={{
        mb: 10,
      }}
    >
      <Box
        component={'section'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 10,
          p: 2,
          backgroundImage: `url(https://${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
          textTransform: 'uppercase',
          position: 'relative',
          "&::before" :{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          },
        }}
      >
        <Typography
          variant='h1'
          component='h1'
          sx={{
            color: 'white',
            zIndex: 1,
          }}
        >
          {title}
        </Typography>

        {children}

      </Box>
    </Box>
  );
};

export default PagesListLayout;