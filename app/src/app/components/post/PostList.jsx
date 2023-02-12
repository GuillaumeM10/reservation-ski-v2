import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import PostService from '../../../setup/services/post.service';
import PostCardMain from './PostCardMain';

const PostList = () => {
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
      {/* <Grid container spacing={2}> */}
      <ul className='mainList'>

        {posts.map((post) => (
          <li key={post._id} >
            <PostCardMain post={post} />
          </li>
        ))}
      {/* </Grid> */}
      </ul>
    </Box>
  );
};

export default PostList;
