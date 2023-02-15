import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../../setup/services/post.service';
import PostFilters from '../../components/post/PostFilters';
import PostList from '../../components/post/PostList';
import PagesListLayout from '../../layouts/PagesListLayout';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts()
  }, []);

  const fetchAllPosts = async () => {
    try{
      const response = await PostService.getAll()
      setPosts([...response]);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <Box>
        <PagesListLayout title="welcome" buttonLabel="post" image="www.onpiste.com/img/universes/ski_banner.jpg" >
            {posts[0] && <PostFilters />}
        </PagesListLayout>

        <PostList posts={posts} />
    </Box>
  );
};

export default HomePage;  