import { Box, Button, Typography } from '@mui/material'
import PostCardMain from './PostCardMain';

const PostList = ({ posts }) => {

  return (
    <Box>
      {/* <Grid container spacing={2}> */}
      <ul className='mainList'>

        {posts[0] ? posts.map((post) => (
          <li key={post._id} >
            <PostCardMain post={post} />
          </li>
        )) 
        :<>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: 'black',
              textAlign: 'center',
              margin: 'auto',
            }}
          >
            There are no posts yet ! To create one, you need to create a shop first .
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/shops"
            sx={{
              color: 'white',
              textAlign: 'center',
              margin: 'auto',
              width: 'fit-content!important',
            }}
          >
            <Typography>
              Click here to go to shops page !
            </Typography>
          </Button>
        </>}
      {/* </Grid> */}
      </ul>
    </Box>
  );
};

export default PostList;
