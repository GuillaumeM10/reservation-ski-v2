import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import BookingCard from './BookingCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90vw!important',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 8,
};

const BookingList = ({ bookings }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant='contained'
        sx={{
          zIndex: 1,
        }}
        onClick={handleOpen}
      >
        See My Bookings
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
          
          {/* booking list */}

          {bookings.map((booking) => {
            return (
              <BookingCard booking={booking} key={booking._id} />
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default BookingList;