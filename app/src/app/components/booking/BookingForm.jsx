import { Box, Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BookingService from '../../../setup/services/booking.service';
import PostService from '../../../setup/services/post.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 8,
};

const BookingForm = ({ post }) => {
  const [booking, setBooking] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBooking({
        ...booking,
        "post": post._id,
        [name]: value
    })
  }

  const createBooking = async () => {
    try {
      await BookingService.create(booking);
      await PostService.update(post._id, {isAvailable: false});
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        variant='contained'
        sx={{
          zIndex: 1,
        }}
        onClick={handleOpen}
      >
        Book this Stuff
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
          
          <Box
            component={'form'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              gap: 2
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Create a new post
            </Typography>
            <FormGroup>
              <TextField
                sx={{ width: 300 }}
                label="Phone Number"
                variant="outlined"
                type="text"
                name="telephoneNumber"
                required
                onChange={(e)=>handleChange(e)}
              /> 
            </FormGroup>
            
            <Button
              variant="contained"
              onClick={() => {
                createBooking()
                handleClose()
              }}
              sx={{
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                }
              }}
            >
              <Typography>
                Book
              </Typography>
            </Button>
          </Box>

        </Box>
      </Modal>
    </Box>
  );
};

export default BookingForm;