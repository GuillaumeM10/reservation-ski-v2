import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CommentService from '../../../setup/services/comment.service';

const CommentCard = ({ comment, fetchComments, isAdmin }) => {
  let stars = null;

  if(comment.stars){
    stars = [];
    for (let i = 0; i < comment.stars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    for (let i = 0; i < 5 - comment.stars; i++) {
      stars.push(<span key={i + 5}>☆</span>);
    }
  }

  const deleteComment = async (e) => {
    e.preventDefault();
    try {
      await CommentService.remove(comment._id);
      fetchComments()
    } catch (error) {
      console.log("error : ", error.message);
    }
  }

  return (
    <li>
      <div className='cardMain commentCard'>
        { isAdmin &&
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50px',
            width: '30px',
            height: '30px',
            fontSize: '1rem',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
            }
          }}
          onClick={(e) => {deleteComment(e)}}
        >
          x
        </Button>
        }
        <Typography
          variant="h6"
          className='label'
          sx={{
            textAlign: 'center',
            color: 'black',
            textTransform: 'uppercase'
          }}
        >
          <span>pseudo :</span> {comment.username}
        </Typography>

        <Typography
          variant="h6"
          className='label'
          sx={{
            textAlign: 'center',
            color: 'grey.500'
          }}
        >
          <span>comment :</span> {comment.description}
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            gap: 2
          }}
        >
          {stars
            ? stars.map(star => star)
            : null
          }
        </Box>
      </div>
    </li>
  );
};

export default CommentCard;