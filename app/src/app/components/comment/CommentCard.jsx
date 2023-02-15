import { Typography } from '@mui/material';
import React from 'react';

const CommentCard = ({ comment }) => {
  let stars = null;
  console.log(comment);
  if(comment.stars){
    stars = [];
    for (let i = 0; i < comment.stars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
  }

  return (
    <>
      <div className='cardMain'>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mt: 1,
            color: 'black',
            textTransform: 'uppercase'
          }}
        >
          pseudo : {comment.username}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mt: 2,
            color: 'grey.500'
          }}
        >
          comment : {comment.description}
        </Typography>

        {stars
          ? stars.map(star => star)
          : null
        }
      </div>
    </>
  );
};

export default CommentCard;