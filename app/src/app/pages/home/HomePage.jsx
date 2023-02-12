import { Box } from '@mui/material';
import React from 'react';
import PostFilters from '../../components/post/PostFilters';
import PostList from '../../components/post/PostList';
import PagesListLayout from '../../layouts/PagesListLayout';

const HomePage = () => {
  return (
    <Box>
        <PagesListLayout title="welcome" buttonLabel="post" image="www.onpiste.com/img/universes/ski_banner.jpg" >
            <PostFilters />
        </PagesListLayout>

        <PostList />
    </Box>
  );
};

export default HomePage;  