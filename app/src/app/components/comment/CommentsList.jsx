import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentService from '../../../setup/services/comment.service';
import CommentCard from './CommentCard';
import CommentCreate from './CommentCreate';

const CommentsList = ({ post }) => {
  const [comments, setComments] = useState([]);
  console.log(post);

  useEffect(() => {
    setComments(post.comments)
    console.log(comments);
  }, [post]);

  return (
    <>
      {comments[0] ? 
        <>
          <CommentCreate post={post} />
          {comments.map(comment => (
            <CommentCard comment={comment} key={comment._id} />
          ))}
        </>
      :
        <>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mt: 5,
              color: 'grey.500'
            }}
          >
            No comments yet, be the first to comment!
          </Typography>

          <CommentCreate post={post} />
        </>
      }

    </>
  );
};

export default CommentsList;