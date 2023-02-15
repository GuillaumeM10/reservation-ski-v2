import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../../setup/services/post.service';
import PostFilters from '../../components/post/PostFilters';
import PostList from '../../components/post/PostList';
import PagesListLayout from '../../layouts/PagesListLayout';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filterdPosts, setFilterdPosts] = useState([]);
  const [nothingFound, setNothingFound] = useState("");

  useEffect(() => {
    fetchAllPosts()
  }, []);

  const fetchAllPosts = async (e) => {
      try{
        const response = await PostService.getAll()
        setPosts([...response]);
      } catch(err){
        console.log(err);
      }
  }

  const filterPosts = (label, value) => {
    if(value === "Choisir"){
      setFilterdPosts(posts);
      return;
    }else{
      switch(label){
        case "weight":
          setNothingFound(`No ${label} found with the value ${value}kg`);
          break;
        case "size":
          setNothingFound(`No ${label} found with the value ${value}cm`);
          break;
        case "price":
          setNothingFound(`No ${label} found with the value ${value}€`);
          break;
        default:
          setNothingFound(`No ${label} found with the value ${value}`);
      }
    }

    console.log(posts);
    if(label === "weight" || label === "size" || label === "price"){
      setFilterdPosts(posts.filter(post => post[label] === +value));
    }else{
      setFilterdPosts(posts.filter(post => post[label].match(value)));
    }
  }

  return (
    <Box>
        <PagesListLayout title="welcome" buttonLabel="post" image="www.onpiste.com/img/universes/ski_banner.jpg" >
            {posts[0] && <PostFilters filterPosts={filterPosts} />}
        </PagesListLayout>

        {filterdPosts[0] ?
          <PostList posts={filterdPosts} />
        :
          <>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: '#000',
                textAlign: 'center',
                p: 2,
              }}

            >
              {nothingFound}
            </Typography>
            <PostList posts={posts} />
          </>
        }
    </Box>
  );
};

export default HomePage;  