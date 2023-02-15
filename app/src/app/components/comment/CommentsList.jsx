import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentService from '../../../setup/services/comment.service';
import CommentCard from './CommentCard';
import CommentCreate from './CommentCreate';

const CommentsList = ({ post }) => {
  const [comments, setComments] = useState([]);
  let isAdmin = false;

  if(localStorage.getItem(post.shop)){
    isAdmin = localStorage.getItem(post.shop);
  }

  const fetchComments = async() => {
    try {
      const response = await CommentService.getAll()
      // 
      setComments(response.filter((comment) => comment.post === post._id))
    } catch (error) {
      console.log("error : ", error.message);
    }
  }
  useEffect(() => {
    fetchComments()
  }, []);

  return (
    <>
      {comments[0] ? 
        <div className='mainList'>
          <CommentCreate post={post} />
          {comments.map(comment => (
            <CommentCard isAdmin={isAdmin} comment={comment} key={comment._id} fetchComments={fetchComments} />
          ))}
        </div>
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

          <CommentCreate post={post} fetchComments={fetchComments} />
        </>
      }

    </>
  );
};

export default CommentsList;