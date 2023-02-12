import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../../setup/services/post.service';
import PostFormEdit from './PostFormEdit';

const PostCardMain = ({ post, loggedIn, fetchPost }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const deletePost = async (id) => {
    try {
      const response = await PostService.remove(id);
      console.log(response);
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className='cardMain'>
        <img src={post.imageUrl} alt="" />

        <div>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </div>
      </div>

      <div className="buttons">

        <Button
          component={Link}
          to={`/post/${post._id}`}
          variant="contained"
        >
          <Typography>
            View
          </Typography>
        </Button>
        {loggedIn && (
          <>
            <Button
              onClick={() => deletePost(post._id)}
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'red',
                  color: 'white',
                }
              }}
            >
              <Typography>
                Delete
              </Typography>
            </Button>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                }
              }}
            >
              <Typography>
                Edit
              </Typography>
            </Button>

            <PostFormEdit post={post} fetchPost={fetchPost} open={open} setOpen={setOpen} />
          </>
        )}

      </div>

    </>
  );
};

export default PostCardMain;