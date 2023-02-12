import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../setup/services/post.service';

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
          <a href="/">Back</a>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} alt="" />
        </div>
      )}
      
    </Box>
  );
};

export default PostDetail;