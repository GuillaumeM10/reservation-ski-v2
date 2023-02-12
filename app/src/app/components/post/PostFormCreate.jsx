import React, { useState } from 'react';
import { Box, Button, FormGroup, Modal, TextField, Typography } from '@mui/material';
import PostService from '../../../setup/services/post.service';

const PostFormCreate = ({ handleClose, fetchPost, shop }) => {
  const [post, setPost] = useState({});


  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost({
        ...post,
        "isAvailable": true,
        "shop": shop,
        [name]: value
    })
  }

  const createPost = async () => {
    try {
      await PostService.create(post);
      handleClose()
      fetchPost();
    } catch (error) {
      console.log("error : ", error.message);
    }
  }
  return (
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
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          required
          onChange={(e)=>handleChange(e)}
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
          name="price"
          required
          onChange={(e)=>handleChange(e)}
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
        />
      </FormGroup>

      <Button
        variant="contained"
        onClick={() => {
          createPost()
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
          Create
        </Typography>
      </Button>
    </Box>
  );
};

export default PostFormCreate;