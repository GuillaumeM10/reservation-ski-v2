import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import BookingService from '../../../setup/services/booking.service';
import PostService from '../../../setup/services/post.service';

const BookingCard = ({ booking }) => {
  const [bookedPost, setBookedPost] = useState(null);
  const bookingRef = useRef(null);


  useEffect(() => {
    fetchBookedPost();
  }, []);

  const fetchBookedPost = async () => {
    try {
      const reponse = await PostService.getOne(booking.post);
      setBookedPost(reponse);
    } catch (error) {
      console.log("error", error);
    }
  }

  const cancelBookin = async () => {
    try {
      await PostService.update(booking.post, {isAvailable: true});
      await BookingService.remove(booking._id);
      bookingRef.current.style.display = "none";
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
      }}
      ref={bookingRef}
    >
      <Typography
        variant="h6"
        component="h2"
        
      >
        phone number: <a href={"tel:" + booking.telephoneNumber}>{booking.telephoneNumber}</a>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
        post name : {bookedPost && bookedPost.title}
        </Typography>

        <Button
          variant="text"
          sx={{
            mt: 1,
            color: 'red',
          }}
          onClick={cancelBookin}
        >
          Cancel Booking
        </Button>

        <Button
          href={"/post/" + booking.post}
          variant="contained"
          sx={{
            mt: 1,
            color: 'primary',
          }}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default BookingCard;