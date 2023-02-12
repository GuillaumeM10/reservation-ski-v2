import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import PostFormCreate from './PostFormCreate';

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
const PostCreate = ({ fetchPost, shop }) => {
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
        <Typography
          sx={{
            color: 'white',
            zIndex: 1,
          }}
        >
          Create a new post
        </Typography>
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
          
          <PostFormCreate fetchPost={fetchPost} handleClose={handleClose} shop={shop} />

        </Box>
      </Modal>
    </>
  );
};

export default PostCreate;