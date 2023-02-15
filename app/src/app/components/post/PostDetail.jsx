import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../setup/services/post.service';
import BookingForm from '../booking/BookingForm';
import CommentsList from '../comment/CommentsList';
import PostDetailInfos from './PostDetailInfos';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
        const response = await PostService.getOne(id);
        setPost(response);
    } catch (error) {
        console.log(error);
    } 
  }

  return (
    <Box>
      {post && (
        <div className='postDetails'>
            <Button 
              href="/"
              variant="text"
              sx={{ 
                mt: 1,
                color: 'black',
              }}
              className="backButton"
            >
              Back
            </Button>
            
            <PostDetailInfos post={post} />
            <BookingForm post={post} fetchPost={fetchPost} />
            <CommentsList post={post}/>

        </div>
      )}
      
    </Box>
  );
};

export default PostDetail;