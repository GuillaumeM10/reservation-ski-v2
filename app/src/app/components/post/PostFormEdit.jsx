import React, { useState } from 'react';
import { Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
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

const PostFormEdit = ({ post, fetchPost, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [newPost, setNewPost] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewPost({
        ...post,
        [name]: value
    })
  }

  const editPost = async (id) => {
    try {
      await PostService.update(id, newPost);
      fetchPost();
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
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
            Edit Post
          </Typography>
          
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="Title"
              variant="outlined"
              type="text"
              name="title"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.title}
            /> 
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="image Url"
              variant="outlined"
              type="text"
              name="imageUrl"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.imageUrl}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="Weight"
              select
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              type="number"
              name="weight"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.weight}
            >
              <option value="45">Plus de 45kg</option>
              <option value="4565">Entre 45 et 65kg</option>
              <option value="65">Plus de 65kg</option>
            </TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              select
              SelectProps={{
                native: true,
              }}
              label="Size"
              variant="outlined"
              type="number"
              name="size"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.size}
            >
              <option value="140">140cm</option>
              <option value="145">145cm</option>
              <option value="150">150cm</option>
              <option value="155">155cm</option>
              <option value="160">160cm</option>
              <option value="165">165cm</option>
              <option value="170">170cm</option>
              <option value="175">175cm</option>
              <option value="180">180cm</option>
              <option value="185">185cm</option>
              <option value="190">190cm</option>
            </TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              select
              SelectProps={{
                native: true,
              }}
              label="Style"
              variant="outlined"
              type="text"
              name="style"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.style}
            >
              <option value="Freeride">Freeride</option>
              <option value="Freestyle">Freestyle</option>
              <option value="Piste">Piste</option>
              <option value="Polyvalant">Polyvalant</option>
            </TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="Price"
              variant="outlined"
              type="number"
              min='0'
              name="price"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.price}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="Description"
              variant="outlined"
              type="text"
              name="description"
              required
              onChange={(e)=>handleChange(e)}
              defaultValue={post.description}
            />
          </FormGroup>
          
          <Button
            variant="contained"
            onClick={() => {
              editPost(post._id)
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
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PostFormEdit;