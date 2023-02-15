import { Button, FormGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CommentService from '../../../setup/services/comment.service';

const CommentCreate = ({ post, fetchComments }) => {
  const [newComment, setNewComment] = useState({});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewComment({
        "post": post._id,
        ...newComment,
        [name]: value
    })
  }

  const createComment = async () => {
    try {
      await CommentService.create(newComment);
      fetchComments();
    } catch (error) {
      console.log("error : ", error.message);
    }
  }

  return (
    <>
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
        <FormGroup>
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            name="username"
            required
            onChange={(e)=>handleChange(e)}
          />
        </FormGroup>
        <Box
          className="starsContainer"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            gap: 2
          }}
        >
          <TextField
              sx={{ width: 300 }}
              select
              SelectProps={{
                native: true,
              }}
              label="Nombre d'étoile"
              name="stars"
              onChange={(e) => handleChange(e)}
              defaultValue='Choisir'
          >
              <option>Choisir</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </TextField>

        </Box>
        <FormGroup>
          <TextField
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
          onClick={createComment}
        >
          Create
        </Button>

      </ Box>
    </>
  );
};

export default CommentCreate;